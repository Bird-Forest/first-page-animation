import React, { Suspense } from "react";
import { languages, fallbackLng } from "../../i18n/settings";
import Speciality from "./_filestrainee/Speciality";
import Stages from "./_filestrainee/Stages";
import Advantages from "./_filestrainee/Advantages";
import Loading from "../_Helper/Loading";
import { useTranslation } from "../../i18n/server";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function TraineesPage({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "trainees");

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Speciality lng={lng} />
        <Stages lng={lng} />
        <Advantages lng={lng} />
      </Suspense>
    </>
  );
}
