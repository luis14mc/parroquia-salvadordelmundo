/**
 * Configuración de navegación — consumida por Navbar y Footer.
 * En Fase 2 el CMS podrá reordenar/añadir items sin tocar componentes.
 *
 * @module config/navigation
 */

export interface NavItem {
  label: string;
  href: string;
  /** Si true, se resalta como CTA (botón primario) */
  isCTA?: boolean;
  /** Si true, abre en nueva pestaña */
  external?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Sacramentos", href: "/sacramentos" },
  { label: "Catequesis", href: "/catequesis" },
  { label: "Oficina Parroquial", href: "/oficina" },
  { label: "Donaciones", href: "/donaciones", isCTA: true },
];
