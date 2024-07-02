import React from "react";
import styles from "./Project.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  FaCircle,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegChartBar,
  FaRegCircle,
} from "react-icons/fa";
import Image from "next/image";

const colors = ["Формування команди", "В розробці", "Завершено"];
const arry = [
  <FaRegCircle key={1} />,
  <FaRegCircle key={2} />,
  <FaRegCircle key={3} />,
  <FaRegCircle key={4} />,
  <FaRegCircle key={5} />,
];

export default function ProjectItem({ item }) {
  const getStatus = () => {
    if (item.status === colors[2]) return "rgb(27, 161, 97)";
    if (item.status === colors[1]) return "rgb(255, 234, 0)";
    if (item.status === colors[0]) return "rgb(255, 23, 68)";
  };
  const color = getStatus();

  const complexity = item.difficult;
  const users = item.team;
  return (
    <li className={styles.wrapItem}>
      <Image
        alt={item.title}
        src={item.img}
        quality={100}
        width={394}
        height={456}
        style={{
          borderRadius: "10px",
          objectFit: "cover",
        }}
        priority
      />
      <div className={styles.wrapInfo}>
        <div className={styles.statusWrap}>
          <FaCircle className={styles.statusIcon} style={{ fill: color }} />
          <p className={styles.statusText}>{item.status}</p>
        </div>
        <h4 className={styles.itemTitle}>{item.title}</h4>
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
            <p className={styles.wrapText}>{item.start}</p>
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
                <FaRegCircle
                  key={el.key}
                  className={
                    el.key <= complexity
                      ? styles.diffIcon + " " + styles.bg
                      : styles.diffIcon + " " + " "
                  }
                />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4 className={styles.itemTitle}>Команда проєкту</h4>
          <ul>
            {users.map((obj) => (
              <li key={uuidv4()}>
                <h5>{obj.title}</h5>
                <ul>
                  {obj.developers.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
