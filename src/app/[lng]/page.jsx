// import Image from "next/image";
import styles from "./page.module.css";
import { useTranslation } from "../i18n/server";
import { languages, fallbackLng } from "../i18n/settings";

// import initTranslations from "../i18n";
// import TranslationsProvider from "../components/TranslationsProvider";

// const i18nNamespaces = ["home"];
// console.log("18", i18nNamespaces);

// export function generateStaticParams() {
//   return i18nConfig.locales.map((locale) => ({ locale }));
// }
export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.center}>
      <h1>{t("wellcom")}</h1>
    </div>
  );
}
