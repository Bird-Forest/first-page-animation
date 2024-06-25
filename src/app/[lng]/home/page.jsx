import Hero from "./_components/Hero";
import History from "./_components/History";
import Counter from "./_components/Counter";
import Mentor from "./_components/Mentor";
import Structure from "./_components/Structure";
import Questions from "./_components/Questions";
import Press from "./_components/Press";
import Partners from "./_components/Partners";
import Reviews from "./_components/Reviews";
import FormFeedback from "./_components/FormFeedback";
import { Suspense } from "react";
import Loading from "../_Helper/Loading";
import { languages, fallbackLng } from "../../i18n/settings";
import { useTranslation } from "@/app/i18n/server";

// import initTranslations from "../i18n";
// import TranslationsProvider from "../components/TranslationsProvider";

// const i18nNamespaces = "home";
// console.log("18", i18nNamespaces);

// export function generateStaticParams() {
//   return i18nConfig.locales.map((locale) => ({ locale }));
// }
export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "home");

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero lng={lng} />
        <History lng={lng} />
        <Structure lng={lng} />
        <Counter lng={lng} />
        <Questions lng={lng} />
        <Press lng={lng} />
        <Mentor lng={lng} />
        <Partners lng={lng} />
        <Reviews lng={lng} />
        <FormFeedback lng={lng} />
      </Suspense>
    </>
  );
}
