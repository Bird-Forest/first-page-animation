import React from "react";
import { useTranslation } from "../../i18n/server";
import { languages } from "../../i18n/settings";
// import { getDictionary } from "../dictionaries";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function ProjectsPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "projects");

  // const dict = await getDictionary(lang);
  // return <div>{dict.page.wellcome}</div>;
  return (
    <div>
      <h1>{t("wellcom")}</h1>
    </div>
  );
}
