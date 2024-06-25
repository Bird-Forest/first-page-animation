import React from "react";
import { languages } from "../../i18n/settings";
import styles from "../page.module.css";
import Speciality from "./_filestrainee/Speciality";
import Stages from "./_filestrainee/Stages";
import Advantages from "./_filestrainee/Advantages";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function TraineesPage({ params: { lng } }) {
  // const dict = await getDictionary(lang);
  // return <div>{dict.page.wellcome}</div>;
  return (
    <>
      <Speciality />
      <Stages />
      <Advantages />
    </>
  );
}
