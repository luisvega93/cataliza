export const siteOrigin = "https://luisvega93.github.io";
export const siteBasePath = "/cataliza";
export const siteName = "Cataliza Capital";

export const staticSiteConfig = {
  localeStorageKey: "cataliza_locale_v1",
  accessStorageKey: "cataliza_access_v1",
  accessPasswordHash: "91baac793b15c4e6a8ba30ea6033a43fb621f8dd533aec197be4f327b926f98b",
  googleForm: {
    openUrl: "",
    embedUrl: "",
    contactUrl: "",
  },
} as const;

export function hasGoogleFormConfigured() {
  return Boolean(staticSiteConfig.googleForm.openUrl && staticSiteConfig.googleForm.embedUrl);
}

export function hasApplicationContactConfigured() {
  return Boolean(staticSiteConfig.googleForm.contactUrl);
}

export function buildSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const sitePath = normalizedPath === "/" ? siteBasePath : `${siteBasePath}${normalizedPath}`;
  return new URL(sitePath, siteOrigin).toString();
}
