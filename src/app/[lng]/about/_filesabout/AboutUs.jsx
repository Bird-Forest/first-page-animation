"use client";

import React from "react";
import styles from "./About.module.css";
import { TbTargetArrow } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { useTranslation } from "../../../i18n/client";

export default function AboutUs({ lng }) {
  const { t } = useTranslation(lng, "about");
  return (
    <div className={styles.wrapAbout}>
      <div className={styles.itemWrap}>
        <div className={styles.wrapTitle}>
          <div className={styles.wrapIcon}>
            <FaPeopleRoof
              style={{ fill: "#e231a8" }}
              className={styles.iconTitle}
            />
          </div>
          <h3 className={styles.itemTitle}>{t("about_title1")}</h3>
        </div>
        <p className={styles.itemText}>{t("about_text1")}</p>
      </div>
      <div className={styles.itemWrap}>
        <div className={styles.wrapTitle}>
          <div className={styles.wrapIcon}>
            <GiPublicSpeaker
              style={{ fill: "#e231a8" }}
              className={styles.iconTitle}
            />
          </div>
          <h3 className={styles.itemTitle}>{t("about_title2")}</h3>
        </div>
        <p className={styles.itemText}>{t("about_text2")}</p>
      </div>
      <div className={styles.itemWrap}>
        <div className={styles.wrapTitle}>
          <div className={styles.wrapIcon}>
            <TbTargetArrow
              style={{ stroke: "#e231a8" }}
              className={styles.iconTitle}
            />
          </div>
          <h3 className={styles.itemTitle}>{t("about_title3")}</h3>
        </div>
        <p className={styles.itemText}>{t("about_text3")}</p>
      </div>
      <div className={styles.itemWrap}>
        <div className={styles.wrapTitle}>
          <div className={styles.wrapIcon}>
            <FaPeopleArrows
              style={{ fill: "#e231a8" }}
              className={styles.iconTitle}
            />
          </div>
          <h3 className={styles.itemTitle}>{t("about_title4")}</h3>
        </div>
        <p className={styles.itemText}>{t("about_text4")}</p>
      </div>
    </div>
  );
}
