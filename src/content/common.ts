import type { PublicNavSectionKey } from "@/content/site-sections";
import type { Locale } from "@/lib/i18n";

export type NavItem = {
  section: PublicNavSectionKey;
  label: string;
};

export type ShellCopy = {
  brandDeck: string;
  skipLink: string;
  navLabel: string;
  menuLabel: string;
  closeMenuLabel: string;
  nav: NavItem[];
  utilities: {
    playbook: string;
    financialModel: string;
    access: string;
  };
  footer: {
    line: string;
    note: string;
  };
};

export const shellCopy: Record<Locale, ShellCopy> = {
  es: {
    brandDeck: "Plataforma, fondeo y comunidad para personas cuya vocación ya transforma su entorno.",
    skipLink: "Saltar al contenido",
    navLabel: "Navegación principal",
    menuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
    nav: [
      { section: "home", label: "Inicio" },
      { section: "thesis", label: "Nuestra tesis" },
      { section: "search", label: "Qué buscamos" },
      { section: "model", label: "Qué recibe el aliado" },
      { section: "process", label: "Proceso" },
      { section: "application", label: "Aplicación" },
    ],
    utilities: {
      playbook: "Playbook interno",
      financialModel: "Modelo financiero",
      access: "Acceso protegido",
    },
    footer: {
      line: "Cataliza selecciona 1 aliado por año y construye con metas claras de impacto y desempeño económico.",
      note: "Sitio estático bilingüe desplegado en GitHub Pages.",
    },
  },
  en: {
    brandDeck: "Platform, funding, and community for people whose vocation already transforms their surroundings.",
    skipLink: "Skip to content",
    navLabel: "Primary navigation",
    menuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    nav: [
      { section: "home", label: "Home" },
      { section: "thesis", label: "Our thesis" },
      { section: "search", label: "What we seek" },
      { section: "model", label: "What the ally receives" },
      { section: "process", label: "Process" },
      { section: "application", label: "Apply" },
    ],
    utilities: {
      playbook: "Internal playbook",
      financialModel: "Financial model",
      access: "Protected access",
    },
    footer: {
      line: "Cataliza selects one ally per year and builds with clear impact and economic goals.",
      note: "Static bilingual site deployed on GitHub Pages.",
    },
  },
};
