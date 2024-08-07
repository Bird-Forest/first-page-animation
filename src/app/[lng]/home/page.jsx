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
import { languages, fallbackLng } from "../../i18n/settings";
import { useTranslation } from "../../i18n/server";
import { getReviews } from "../../services/reviews";
import { revalidatePath } from "next/cache";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "home");
  const reviews = await getReviews();
  // const reviews = data.filter(item => item.status === true)

  revalidatePath(`/${lng}/home`, "page");

  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      <Hero lng={lng} />
      <History lng={lng} />
      <Structure lng={lng} />
      <Counter lng={lng} />
      <Questions lng={lng} />
      <Press lng={lng} />
      <Mentor lng={lng} />
      <Partners lng={lng} />
      <Reviews reviews={reviews} lng={lng} />
      <FormFeedback lng={lng} />
      {/* </Suspense> */}
    </>
  );
}
