import { cpSync, mkdirSync, existsSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const sourceStandalone = resolve(root, ".next", "standalone");
const sourceStatic = resolve(root, ".next", "static");
const sourcePublic = resolve(root, "public");
const target = resolve(root, "webuzo_deploy");

if (!existsSync(sourceStandalone)) {
  throw new Error(
    "No se encontro .next/standalone. Ejecuta primero `npm run build`."
  );
}

mkdirSync(target, { recursive: true });

// Copia la app standalone de Next al folder de deploy.
cpSync(sourceStandalone, target, { recursive: true, force: true });

// Quita node_modules (binarios nativos de Windows — no sirven en Linux)
const nmTarget = resolve(target, "node_modules");
if (existsSync(nmTarget)) rmSync(nmTarget, { recursive: true, force: true });

// Copia assets estaticos y public/
cpSync(sourceStatic, resolve(target, ".next", "static"), {
  recursive: true,
  force: true,
});
cpSync(sourcePublic, resolve(target, "public"), {
  recursive: true,
  force: true,
});

// Webuzo suele servir estaticos desde public/; copia _next/static ahi tambien
cpSync(sourceStatic, resolve(target, "public", "_next", "static"), {
  recursive: true,
  force: true,
});

// Limpia el package.json para produccion (quita devDeps, scripts innecesarios)
const pkgPath = resolve(target, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
pkg.scripts = { start: "node server.js" };
delete pkg.devDependencies;
pkg.dependencies = pkg.dependencies || {};
pkg.dependencies.sharp = pkg.dependencies.sharp || "^0.33.0";
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`Webuzo deploy actualizado en: ${target}`);
