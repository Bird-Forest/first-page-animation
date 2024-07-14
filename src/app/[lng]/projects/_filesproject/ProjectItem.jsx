"use client";

import React, { useState } from "react";
import styles from "./Project.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  FaCircle,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegChartBar,
  FaRegCircle,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const arry = [
  <FaRegCircle key={1} />,
  <FaRegCircle key={2} />,
  <FaRegCircle key={3} />,
  <FaRegCircle key={4} />,
  <FaRegCircle key={5} />,
];

export default function ProjectItem({ item }) {
  const [showTeam, setShowTeam] = useState(false);

  const openTeamList = () => {
    setShowTeam(true);
  };
  const closeTeamList = () => {
    setShowTeam(false);
  };

  const state = item.status;
  const date = new Date(item.start);
  const start = date.toDateString();
  const users = item.team;
  const Arr = Array.isArray(users) && users.length > 0;
  return (
    <li className={styles.wrapItem}>
      {/* <Image
        alt="Picture of project"
        src={item.imageUrl}
        quality={100}
        width={396}
        height={456}
        style={{
          borderRadius: "12px",
          objectFit: "cover",
        }}
        priority
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

        <div className={styles.wrapElements}>
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
            <p className={styles.wrapText}>{start}</p>
          </div>
          <div className={styles.wrapElem}>
            <div className={styles.elem}>
              <FaRegClock className={styles.itemIcon} />
              <p className={styles.itemText}>Тривалість</p>
            </div>
            <p className={styles.wrapText}>{item.duration}</p>
          </div>
          <div className={styles.wrapElem}>
            <div className={styles.elem}>
              <FaRegChartBar className={styles.itemIcon} />
              <p className={styles.itemText}>Складність</p>
            </div>
            <ul className={styles.elem}>
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
          <button
            type="button"
            onClick={openTeamList}
            className={styles.teamBtn}
          >
            Команда проєкту
          </button>
        </div>

        <div className={`${styles.wrapTeam} ${showTeam ? styles.show : ""}`}>
          <button
            type="button"
            onClick={closeTeamList}
            className={styles.closeBtn}
          >
            <IoClose className={styles.close} />
          </button>
          <ul className={styles.teamList}>
            {Arr ? (
              users.map((obj) => (
                <li key={uuidv4()} className={styles.objWrap}>
                  <h5 className={styles.objTitle}>{obj.title}</h5>
                  <ul className={styles.devList}>
                    {obj.developers.map((el, i) => (
                      <li key={i} className={styles.elDev}>
                        {el}
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            ) : (
              <p className={styles.objTitle}>Очікує свою команду</p>
            )}
          </ul>
        </div>
      </div>
    </li>
  );
}

// imageUrl
