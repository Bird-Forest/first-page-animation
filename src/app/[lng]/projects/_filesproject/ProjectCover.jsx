import React from "react";
import styles from "./Project.module.css";
import {
  FaCircle,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegChartBar,
  FaRegCircle,
} from "react-icons/fa";
import Image from "next/image";
import lulu from "@/public/images/projects/book.webp";
import { format, formatISO } from "date-fns";

const arry = [
  <FaRegCircle key={1} />,
  <FaRegCircle key={2} />,
  <FaRegCircle key={3} />,
  <FaRegCircle key={4} />,
  <FaRegCircle key={5} />,
];

export default function ProjectCover({ item, showTeam }) {
  const state = item.status;

  return (
    <div className={styles.wrapCover}>
      {/* <Image
        alt="Picture of project"
        src={lulu}
        quality={100}
        width={388}
        height={456}
        style={{
          borderRadius: "12px",
          objectFit: "cover",
        }}
        priority
        placeholder="blur"
      /> */}

      <div className={styles.wrapInfo}>
        <div className={styles.statusWrap}>
          <FaCircle
            className={styles.statusIcon}
            style={{ fill: state.color }}
          />
          <p className={styles.statusText}>{state.text}</p>
        </div>
        <div className={styles.wrapTitle}>
          <h4 className={styles.itemTitle}>{item.name}</h4>
        </div>
        <div className={styles.wrapLink}>
          <a
            href={item.web}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.itemLink}
          >
            {item.web}
          </a>
        </div>
        <div className={styles.wrapElem}>
          <div className={styles.elem}>
            <FaRegCalendarAlt className={styles.itemIcon} />
            <p className={styles.itemText}>Старт проєкту</p>
          </div>
          <p className={styles.textBold}>
            {!item.start
              ? formatISO(new Date())
              : format(item.start, "yyyy-MM-dd")}
          </p>
        </div>
        <div className={styles.wrapElem}>
          <div className={styles.elem}>
            <FaRegClock className={styles.itemIcon} />
            <p className={styles.itemText}>Тривалість</p>
          </div>
          <p className={styles.textBold}>{item.duration}</p>
        </div>
        <div className={styles.wrapElem}>
          <div className={styles.elem}>
            <FaRegChartBar className={styles.itemIcon} />
            <p className={styles.itemText}>Складність</p>
          </div>
          <ul className={styles.wrapDiffic}>
            {arry.map((el) => (
              <li key={el.key}>
                <FaRegCircle
                  className={
                    el.key <= item.difficult
                      ? styles.diffIcon + " " + styles.bg
                      : styles.diffIcon + " " + " "
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.wrapTeamBtn}>
          <button type="button" onClick={showTeam} className={styles.teamBtn}>
            Команда проєкту
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <FaCircle
  className={`${styles.statusIcon} ${
    status === "red" ? styles["statusIcon--red"] : styles["statusIcon--green"]
  }`}
/>; */
}
