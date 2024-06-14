// import Image from "next/image";
import styles from "../page.module.css";
import { useTranslation } from "../../i18n/server";
import { languages, fallbackLng } from "../../i18n/settings";
import Hero from "./components/Hero";
import History from "./components/History";
import Counter from "./components/Counter";
import Mentor from "./components/Mentor";
import Structure from "./components/Structure";
import Questions from "./components/Questions";
import Press from "./components/Press";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import FormFeedback from "./components/FormFeedback";

import { Suspense } from "react";
import Loading from "../_Helper/Loading";

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
    <>
      <Suspense fallback={<Loading />}>
        <Hero />
        <History />
        <Structure />
        <Counter />
        <Questions />
        <Press />
        <Mentor />
        <Partners />
        <Reviews />
        <FormFeedback />
      </Suspense>
    </>
  );
}
