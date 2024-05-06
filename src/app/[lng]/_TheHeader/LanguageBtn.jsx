"use client";

import { usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";
// import i18nConfig from "../../../i18nConfig";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Header.module.css";
import { languages } from "../../i18n/settings";
import Link from "next/link";
import { useState } from "react";

export default function LanguageBtn() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [newLng, setNewLng] = useState("");

  const redirectedPathName = (lng) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = lng;
    return segments.join("/");
  };

  console.log(newLng);

  return (
    <div className={styles.lngwrap}>
      <div className={styles.lngselect}>
        <input
          className={styles.lnginput}
          type="text"
          id="lng"
          name="lng"
          value={newLng.toUpperCase()}
          readOnly={newLng}
          // onChange={newLng.toUpperCase()}
        />
        <ul
          className={styles.lnglist}
          style={{
            display: isOpen ? "none" : "block",
          }}
        >
          {languages.map((lng) => {
            return (
              <li key={lng} value={lng} onClick={() => setNewLng(lng)}>
                <Link href={redirectedPathName(lng)} className={styles.lnglink}>
                  {lng.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.btnicon}>
        {isOpen ? (
          <FaChevronDown className={styles.icon} />
        ) : (
          <FaChevronUp className={styles.icon} />
        )}
      </button>
    </div>
  );
}

// onClick={() => setIsOpen(!isOpen)}

// import React from "react";
// import styles from "./Header.module.css";
// import { FaChevronDown } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export default function LanguageBtn() {
//   const pathName = usePathname();
//   const redirectedPathName = (locale) => {
//     if (!pathName) return "/";
//     const segments = pathName.split("/");
//     segments[1] = locale;
//     return segments.join("/");
//   };

//   const locales = ["uk", "en", "pl"];

//   return (
//     <div className={styles.language}>
//       <ul>
//         {locales.map((locale) => {
//           return (
//             <li key={locale}>
//               <Link href={redirectedPathName(locale)}>{locale}</Link>
//             </li>
//           );
//         })}
//       </ul>
//       <FaChevronDown className={styles.icon} />
//     </div>
//   );
// }
