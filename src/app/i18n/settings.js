export const fallbackLng = "uk";
export const languages = [fallbackLng, "en", "pl"];
export const ns = [
  "home",
  "trainees",
  "projects",
  "blog",
  "about",
  "admin",
  "auth",
  "modal",
];
export const defaultNS = "home";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
