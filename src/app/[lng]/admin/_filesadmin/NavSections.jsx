import React from "react";
import {
  FaAddressCard,
  FaBlog,
  FaChalkboardTeacher,
  FaFileCode,
  FaLaptopCode,
  FaJsSquare,
  FaIdCard,
  FaRegAddressCard,
  FaCommentAlt,
  FaFilePdf,
  FaIdBadge,
  FaRegIdCard,
  FaShareAlt,
  FaShareAltSquare,
  FaBlogger,
} from "react-icons/fa";
import { MdOutlineInterpreterMode } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { TbMessageHeart } from "react-icons/tb";
import styles from "./Admin.module.css";
import Link from "next/link";

export default function NavSections({ lng }) {
  return (
    <ul className={styles.wrapNav}>
      <li className={styles.wrapLink}>
        {/* <FaAddressCard className={styles.iconLink} />
        <FaIdCard className={styles.iconLink} />
        <FaRegIdCard className={styles.iconLink} /> */}

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
          // className={styles.iconLink}
          style={{
            fill: "rgb(226, 49, 168)",
            width: "64px",
            height: "64px",
          }}
        />
        {/* <FaBlogger className={styles.iconLink} /> */}
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
        {/* <FaFileCode className={styles.iconLink} /> */}
        <FaLaptopCode
          className={styles.iconLink}
          style={{ fill: "rgb(226, 49, 168)" }}
        />
        {/* <FaJsSquare className={styles.iconLink} /> */}
        <Link href={`/${lng}/admin/project`} className={styles.textLink}>
          Проєкти
        </Link>
      </li>
      <li className={styles.wrapLink}>
        {/* <FaCommentAlt className={styles.iconLink} /> */}
        <TbMessageHeart
          className={styles.iconLink}
          style={{ stroke: " rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/review`} className={styles.textLink}>
          Відгуки
        </Link>
      </li>
      <li className={styles.wrapLink}>
        {/* <FaFilePdf
          className={styles.iconLink}
          style={{ fill: " rgb(226, 49, 168)" }}
        /> */}
        <IoDocumentAttach
          className={styles.iconLink}
          style={{ fill: " rgb(226, 49, 168)" }}
        />
        <Link href={`/${lng}/admin/doc`} className={styles.textLink}>
          Документи
        </Link>
      </li>
      <li className={styles.wrapLink}>
        {/* <FaIdBadge className={styles.iconLink} />
        <MdOutlineInterpreterMode className={styles.iconLink} /> */}
        {/* <FaShareAlt
          className={styles.iconLink}
          style={{ fill: " rgb(226, 49, 168)" }}
        /> */}
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
