"use client";

import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Header.module.css";
import { languages } from "../../i18n/settings";
import Link from "next/link";
import { useState } from "react";

export default function LanguageBtn({ lng }) {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [newLng, setNewLng] = useState("");

  const redirectedPathName = (lng) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = lng;
    return segments.join("/");
  };

  return (
    <div className={styles.lngwrap}>
      <div className={styles.lngselect}>
        <input
          className={styles.lnginput}
          type="text"
          id="lng"
          name="lng"
          value={lng.toUpperCase()}
          readOnly={lng}
        />
        <ul
          className={styles.lnglist}
          style={{
            zIndex: isOpen ? "2" : "-1",
            top: isOpen ? "28px" : "0",
          }}
        >
          {languages.map((item) =>
            item !== lng ? (
              <li key={item} value={item} onClick={() => setNewLng(item)}>
                <Link
                  href={redirectedPathName(item)}
                  className={styles.lnglink}
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            ) : null
          )}
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
