import React from "react";
import {
  FaBlog,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaRegAddressCard,
  FaShareAltSquare,
} from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { TbMessageHeart } from "react-icons/tb";
import styles from "./Admin.module.css";
import Link from "next/link";

export default function SectionNavigation({ lng }) {
  return (
    <ul className={styles.wrapNav}>
      <li className={styles.wrapLink}>
        <FaRegAddressCard
          className={styles.iconLink}
          style={{ fill: "rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/dev`} className={styles.textLink}>
          Учасники
        </Link>
      </li>
      <li className={styles.wrapLink}>
        <FaBlog
          style={{
            fill: "rgb(226, 49, 168)",
            width: "64px",
            height: "64px",
          }}
        />
        <Link href={`/${lng}/admin/post`} className={styles.textLink}>
          Блог
        </Link>
      </li>
      <li className={styles.wrapLink}>
        <FaChalkboardTeacher
          className={styles.iconLink}
          style={{ fill: "rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/mentor`} className={styles.textLink}>
          Ментори
        </Link>
      </li>
      <li className={styles.wrapLink}>
        <FaLaptopCode
          className={styles.iconLink}
          style={{ fill: "rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/project`} className={styles.textLink}>
          Проєкти
        </Link>
      </li>
      <li className={styles.wrapLink}>
        <TbMessageHeart
          className={styles.iconLink}
          style={{ stroke: " rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/review`} className={styles.textLink}>
          Відгуки
        </Link>
      </li>
      <li className={styles.wrapLink}>
        <IoDocumentAttach
          className={styles.iconLink}
          style={{ fill: " rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/doc`} className={styles.textLink}>
          Документи
        </Link>
      </li>
      <li className={styles.wrapLink}>
        <FaShareAltSquare
          className={styles.iconLink}
          style={{ fill: " rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/press`} className={styles.textLink}>
          Преса
        </Link>
      </li>
    </ul>
  );
}
