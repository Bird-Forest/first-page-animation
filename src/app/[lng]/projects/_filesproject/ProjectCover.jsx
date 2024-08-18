"use client";

import React from "react";
import styles from "./Project.module.css";
import {
  FaCircle,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegChartBar,
  FaRegCircle,
  FaUsers,
} from "react-icons/fa";
import Image from "next/image";
import { imgProjects } from "./data/projects";

const arry = [
  <FaRegCircle key={1} />,
  <FaRegCircle key={2} />,
  <FaRegCircle key={3} />,
  <FaRegCircle key={4} />,
  <FaRegCircle key={5} />,
];

export default function ProjectCover({ item, showTeam, lng }) {
  const state = item.status;
  const dateNow = new Date();
  const date = !item ? dateNow.toISOString() : item.start.slice(0, 10);

  const myImg = item.imageUrl;
  let img;

  const getImg = () => {
    for (let i = 0; i < imgProjects.length; i++) {
      img = imgProjects[i];
      const imgSrc = img.src.slice(20, 23);

      const isImg = myImg.includes(imgSrc);

      if (isImg === true) return img;
    }
  };
  const path = getImg();

  // const imageLoader = ({ src, width, quality }) => {
  //   return `localhost:3000/${lng}/public/imajes/projects/${src}?w=${width}&q=${
  //     quality || 75
  //   }`;
  // };

  return (
    <div className={styles.wrapCover}>
      <Image
        // loader={imageLoader}
        alt="Picture of project"
        src={path}
        quality={80}
        width={388}
        height={464}
        style={{
          borderRadius: "12px",
        }}
      />

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
            {date}
            {/* {!item.start
              ? formatISO(new Date())
              : format(item.start, "yyyy-MM-dd")} */}
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
          <FaUsers className={styles.iconTeam} />
          <button type="button" onClick={showTeam} className={styles.teamBtn}>
            Команда проєкту
          </button>
        </div>
      </div>
    </div>
  );
}
