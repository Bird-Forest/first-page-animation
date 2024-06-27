import title1 from "../../../../../../public/images/stages/title-1.svg";
import title3 from "../../../../../../public/images/stages/title-3.svg";
import title4 from "../../../../../../public/images/stages/title-4.svg";
import title2 from "../../../../../../public/images/stages/title-2.svg";

import styles from "../Stages.module.css"; // Путь к вашему файлу стилей

// console.log("BG-arr", bg1);

export const stages = [
  {
    title: "stage_1_title",
    img: title1,
    bg: styles.bg1,
    text1: "stage_1_text1",
    text2: "stage_1_text2",
    text3: "stage_1_text3",
  },
  {
    title: "stage_2_title",
    img: title2,
    bg: styles.bg2,
    text1: "stage_2_text1",
    text2: "stage_2_text2",
    text3: "stage_2_text3",
  },
  {
    title: "stage_3_title",
    img: title3,
    bg: styles.bg3,
    text1: "stage_3_text1",
    text2: "stage_3_text2",
    text3: "stage_3_text3",
  },
  {
    title: "stage_4_title",
    img: title4,
    bg: styles.bg4,
    text1: "stage_4_text1",
    text2: "stage_4_text2",
    text3: "stage_4_text3",
  },
];
