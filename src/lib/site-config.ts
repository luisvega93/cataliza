export const siteBasePath = "/cataliza";

export const staticSiteConfig = {
  accessStorageKey: "cataliza_access_v1",
  accessPasswordHash: "91baac793b15c4e6a8ba30ea6033a43fb621f8dd533aec197be4f327b926f98b",
  googleForm: {
    openUrl: "",
    embedUrl: "",
  },
} as const;

export function hasGoogleFormConfigured() {
  return Boolean(staticSiteConfig.googleForm.openUrl && staticSiteConfig.googleForm.embedUrl);
}
