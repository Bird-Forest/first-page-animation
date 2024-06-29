export const fallbackLng = "uk";
export const languages = [fallbackLng, "en", "pl"];
export const ns = ["home", "trainees", "projects", "blog", "about", "modal"];
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
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
