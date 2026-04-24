import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGF Group | Soluciones Globales de Cadena de Suministro",
  description:
    "AGF Group ofrece soluciones logísticas globales para los sectores de Petróleo y Gas, Minería, Transporte y Construcción. Carga aérea, marítima y servicios de aduana.",
  keywords:
    "AGF Group, cadena de suministro, logística, petróleo y gas, minería, transporte, construcción, carga aérea, carga marítima",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "AGF Group | Soluciones Globales de Cadena de Suministro",
    description:
      "Soluciones logísticas globales para Petróleo y Gas, Minería, Transporte y Construcción.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
