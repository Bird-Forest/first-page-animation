"use client";

import React from "react";
import styles from "./Advantages.module.css";
import AdvantItem from "./AdvantItem";
import { v4 as uuidv4 } from "uuid";
import { advantages } from "./data/advantages";
import MainButton from "../../_Helper/MainButton";
import { useTranslation } from "@/app/i18n/client";

export default function Advantages({ lng }) {
  const { t } = useTranslation(lng, "trainees");
  return (
    <section className={styles.advant}>
      <h2 className={styles.advantTitle}>{t("advant_title")}</h2>
      <ul className={styles.wrapList}>
        {advantages.map((item) => (
          <AdvantItem key={uuidv4()} item={item} lng={lng} />
        ))}
      </ul>
      <MainButton>{t("advant_btn")}</MainButton>
    </section>
  );
}
