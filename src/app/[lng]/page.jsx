import { redirect } from "next/navigation";
import { languages } from "../i18n/settings";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function navigate({ params: { lng } }) {
  // console.log(languages);
  // console.log(lng);
  redirect(`/${lng}/home`);
}
