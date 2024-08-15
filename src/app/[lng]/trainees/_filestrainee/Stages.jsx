import React from "react";
import styles from "./Stages.module.css";
import { stages } from "./data/stages";
import StagesItem from "./StagesItem";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "@/src/app/i18n/server";

export default async function Stages({ lng }) {
  const { t } = await useTranslation(lng, "trainees");

  return (
    <section className={styles.stages}>
      <h2 className={styles.stageTitle}>{t("stage_title")}</h2>
      <ul className={styles.wrapList}>
        {stages.map((item) => (
          <StagesItem key={uuidv4()} item={item} lng={lng} />
        ))}
      </ul>
    </section>
  );
}
