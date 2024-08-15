import { redirect } from "next/navigation";
import { languages } from "../i18n/settings";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function navigate({ params: { lng } }) {
  redirect(`/${lng}/home`);
}
