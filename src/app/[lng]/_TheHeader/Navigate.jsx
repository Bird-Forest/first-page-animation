"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
import { delay, motion } from "framer-motion";
// import { TfiMenu } from "react-icons/tfi";
{
  /* <TfiMenu />; */
}

export default function Navigate({ lng }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[2];

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1200 },
  };

  return (
    <motion.ul
      className={styles.navigate}
      initial="hidden"
      animate="visible"
      variants={list}
    >
      <motion.li variants={item} transition={{ delay: 12, duration: 2 }}>
        <Link
          href={`/${lng}/home`}
          className={page === "home" ? styles.active : styles.link}
        >
          Головна
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 10, duration: 2 }}>
        <Link
          href={`/${lng}/trainees`}
          className={page === "trainees" ? styles.active : styles.link}
        >
          Стажування
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 8, duration: 2 }}>
        <Link
          href={`/${lng}/projects`}
          className={page === "projects" ? styles.active : styles.link}
        >
          Проекти
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 6, duration: 2 }}>
        <Link
          href={`/${lng}/blog`}
          className={page === "blog" ? styles.active : styles.link}
        >
          Блог
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 4, duration: 2 }}>
        <Link
          href={`/${lng}/contacts`}
          className={page === "contacts" ? styles.active : styles.link}
        >
          Контакти
        </Link>
      </motion.li>
    </motion.ul>
  );
}
// export default function Navigate({ links }) {
//   const pathname = usePathname();
//   const arrVariants = {
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 2,
//         duration: 2,
//       },
//     }),
//     hidden: {
//       opacity: 0,
//       x: -1200,
//     },
//   };
//
//   return (
//     <ul className={styles.navigate}>
//       {links.map((link, i) => {
//         const isActive = pathname === link.href;
//         return (
//           <motion.li
//             key={uuidv4()}
//             variants={arrVariants}
//             initial="hidden"
//             animate="visible"
//             custom={i}
//           >
//             <Link
//               href={link.href}
//               className={isActive ? styles.active : styles.link}
//             >
//               {link.label}
//             </Link>
//           </motion.li>
//         );
//       })}
//     </ul>
//   );
// }
// import { TiThMenu } from "react-icons/ti"; <TiThMenu />;
/* <Link href="/" className={styles.link}>
        Головна
      </Link>
      <Link href="/trainees" className={styles.link}>
        Стажування
      </Link>
      <Link href="/projects" className={styles.link}>
        Проєкти
      </Link>
      <Link href="/blog" className={styles.link}>
        Блог
      </Link>
      <Link href="/contacts" className={styles.link}>
        Контакти
      </Link> */
