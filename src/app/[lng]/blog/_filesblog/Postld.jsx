import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Blog.module.css";
// import { SlLink } from "react-icons/sl";
import { FaLink } from "react-icons/fa";

// const post = {
//   id: "1",
//   date: "12.06.2024",
//   link: "hello",
//   url: "https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg",
//   title:
//     "Останні тенденції розробки програмного забезпечення, які варто побачити у 2024 році",
//   text1:
//     "      За останні кілька років сфера розробки програмного забезпечення зазнала революційних інновацій та трансформаційних змін. У міру того, як світовий ринок розробки програмного забезпечення наближається до оціночної оцінки в 507,2 мільярда доларів, трансформаційний вплив нових тенденцій стає все більш очевидним. Розуміння та адаптація останніх тенденцій розробки програмного забезпечення є стратегічною необхідністю для компаній, які прагнуть підтримувати конкурентоспроможність та актуальність. ",
//   text2:
//     "    Навіщо витрачати свій час на вивчення цих тенденцій? Переваги багатогранні. Бути в курсі останніх досягнень дозволяє вашому бізнесу використовувати найсучасніші технології, що призводить до підвищення операційної ефективності, покращення якості обслуговування клієнтів і явної ринкової переваги. Незалежно від того, чи є ви технічним директором, менеджером проектів або підприємцем, розуміння цих тенденцій має важливе значення для максимізації потенціалу ваших програмних проектів і залишатися в авангарді технологічного прогресу.",
// };

export default function PostId({ post }) {
  return (
    <div className={styles.wrapPost}>
      <div className={styles.wrapSub}>
        <p className={styles.itemDate}>{post.date}</p>
        <p className={styles.itemTitle}>
          <FaLink className={styles.iconLink} />
        </p>
      </div>
      <p className={styles.itemText}>{post.text1}</p>
      <div className={styles.imgPost}>
        <Image alt="logo baza trainee" src={post.url} fill quality={80} />
      </div>
      <p className={styles.itemText}>{post.text2}</p>
      <div className={styles.wrapBtn}>
        <Link href="/blog" className={styles.itemBtn}>
          повернутись ...
        </Link>
      </div>
    </div>
  );
}
