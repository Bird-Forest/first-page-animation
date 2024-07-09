import React from "react";
import styles from "./About.module.css";
import { TbTargetArrow } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";

export default function AboutUs() {
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
          <h3 className={styles.itemTitle}>Про нас</h3>
        </div>
        <p className={styles.itemText}>
          Ініціатива Baza Trainee Ukraine як освітня і тренувальна платформа
          виникає у відповідь на суспільний запит, який склався в Україні в
          2022-2023 роках в сфері працевлаштування в галузі інформаційних
          технологій і представляє собою веб-сайт, що об’єднує, як користувачів,
          дві соціальні групи.
        </p>
      </div>
      <div className={styles.itemWrap}>
        <div className={styles.wrapTitle}>
          <div className={styles.wrapIcon}>
            <GiPublicSpeaker
              style={{ fill: "#e231a8" }}
              className={styles.iconTitle}
            />
          </div>
          <h3 className={styles.itemTitle}>Наша цільова аудиторія</h3>
        </div>
        <p className={styles.itemText}>
          Українці, які опановують спеціальності в сфері ІТ незалежно від віку і
          досвіду — трейні, джуніори, світчери, ментори з однієї сторони, і
          громади та спільноти України в сфері благодійності, волонтерства,
          громадських ініціатив з іншої.
        </p>
      </div>
      <div className={styles.itemWrap}>
        <div className={styles.wrapTitle}>
          <div className={styles.wrapIcon}>
            <TbTargetArrow
              style={{ stroke: "#e231a8" }}
              className={styles.iconTitle}
            />
          </div>
          <h3 className={styles.itemTitle}>Наша ціль</h3>
        </div>
        <p className={styles.itemText}>
          Поєднати в спільній діяльності ці категорії таким чином, щоб користь
          отримали обидві сторони. Для першої групи — це реальний практичний
          досвід створення живого проєкту, для другої — цифровий продукт, що
          працює і сприяє розвитку соціальної ініціативи.
        </p>
      </div>
      <div className={styles.itemWrap}>
        <div className={styles.wrapTitle}>
          <div className={styles.wrapIcon}>
            <FaPeopleArrows
              style={{ fill: "#e231a8" }}
              className={styles.iconTitle}
            />
          </div>
          <h3 className={styles.itemTitle}>Принцип дії</h3>
        </div>
        <p className={styles.itemText}>
          Тренувати учасника на основі технологій, якими він володіє на даний
          момент, і сприяти його працевлаштуванню. Застосовувати при створенні
          проєкту технології, які хоче розвивати учасник, перенавчання не
          відбувається. Забезпечити замовника якісним цифровим продуктом.
        </p>
      </div>
    </div>
  );
}
