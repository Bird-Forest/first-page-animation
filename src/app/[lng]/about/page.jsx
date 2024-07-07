import React from "react";
import { languages } from "../../i18n/settings";

// import { TfiWrite } from "react-icons/tfi";
// import Image from "next/image";
// import blog from "@/public/baza/blog.png";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function AboutPage({ params: { lng } }) {
  return (
    <div>
      <h1>Про нас</h1>
    </div>
  );
}
