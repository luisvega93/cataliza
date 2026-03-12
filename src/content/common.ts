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
    brandDeck: "Plataforma, fondeo y comunidad para personas cuya vocaci\u00f3n ya transforma su entorno.",
    skipLink: "Saltar al contenido",
    navLabel: "Navegaci\u00f3n principal",
    menuLabel: "Abrir men\u00fa",
    closeMenuLabel: "Cerrar men\u00fa",
    nav: [
      { section: "home", label: "Inicio" },
      { section: "thesis", label: "Nuestra tesis" },
      { section: "search", label: "Qu\u00e9 buscamos" },
      { section: "offer", label: "Qu\u00e9 recibe" },
      { section: "work", label: "C\u00f3mo trabajamos" },
      { section: "process", label: "Proceso" },
      { section: "application", label: "Aplicaci\u00f3n" },
    ],
    utilities: {
      playbook: "Playbook interno",
      financialModel: "Modelo financiero",
      access: "Acceso protegido",
    },
    footer: {
      line: "Cataliza selecciona un aliado por a\u00f1o y construye con metas claras de impacto y econ\u00f3micas.",
      note: "Sitio est\u00e1tico biling\u00fce desplegado en GitHub Pages.",
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
      { section: "offer", label: "What the ally receives" },
      { section: "work", label: "How we work" },
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
