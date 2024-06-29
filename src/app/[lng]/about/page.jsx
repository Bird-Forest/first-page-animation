import React, { Suspense } from "react";
import { languages } from "../../i18n/settings";
import styles from "./_filesabout/Document.module.css";
// import { getDictionary } from "../dictionaries";
// import document from "../../../../public/documents/rules_participant.pdf";
// import DocumentPDF from "./_filesabout/DocumentPDF";
import Loading from "../_Helper/Loading";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function AboutPage({ params: { lng } }) {
  // console.log(languages);
  // const dict = await getDictionary(lang);
  // return <div>{dict.page.wellcome}</div>;
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.contain}>
        <h1>About</h1>
        {/* <Loading /> */}
        {/* <DocumentPDF doc={document} /> */}
      </div>
    </Suspense>
  );
}
