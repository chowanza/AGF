export const siteNav = [
  { key: "home", href: "/" },
  { key: "about", href: "/about-us" },
  { key: "policies", href: "/policies" },
  { key: "products", href: "/products" },
  { key: "service", href: "/service" },
  { key: "contact", href: "/contact-us" },
] as const;

export type SiteNavKey = (typeof siteNav)[number]["key"];
