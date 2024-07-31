"use client";

import React, { useState } from "react";
import styles from "./ProjectAdm.module.css";
import { v4 as uuidv4 } from "uuid";
import { BsChevronUp, BsChevronDown, BsCircleFill } from "react-icons/bs";
import { formatISO } from "date-fns";

const start = { color: "#ff1744", text: "Формування команди" };
const inital = { color: "#ffeb3b", text: "В розробці" };
const finish = { color: "#099e56", text: "Завершено" };
export const arrStatus = [start, inital, finish];

export default function ProjectForm({ project, lng }) {
  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(!project ? start : project.status);
  // console.log(show);
  console.log(project);
  // const id = !item ? null : item._id;
  const id = !project ? null : project._id;
  const date = !project ? formatISO(new Date()) : project.start;
  console.log(date);

  return (
    <div className={styles.wrapAdmProject}>
      <form className={styles.wrapForm}>
        <label htmlFor="name" className={styles.wrapInput}>
          Додати заголовок
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={!project ? null : project.name}
            className={styles.inputText}
          />
        </label>
        <div className={styles.wrapElemOptions}>
          <div
            style={{
              display: !show ? "none" : "block",
              position: "absolute",
              top: "72px",
            }}
          >
            <ul className={styles.wrapOptions}>
              {arrStatus.map((item) => (
                <li
                  key={uuidv4()}
                  value={item}
                  onClick={() => setStatus(item)}
                  className={styles.textOption}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.wrapIconBtn}>
            <BsCircleFill
              style={{ fill: status.color, width: "24px", height: "24px" }}
            />
          </div>
          <label htmlFor="status" className={styles.wrapInput}>
            Статус проєкту
            <input
              type="text"
              name="status"
              id="status"
              defaultValue={status.text}
              readOnly={status.text}
              className={styles.inputText}
            />
          </label>
          <button
            type="button"
            onClick={() => setShow(!show)}
            className={styles.wrapIconBtn}
          >
            {show ? (
              <BsChevronDown className={styles.iconBtn} />
            ) : (
              <BsChevronUp className={styles.iconBtn} />
            )}
          </button>
        </div>

        <label htmlFor="start" className={styles.wrapInput}>
          Початок проєкту
          <input
            type="text"
            name="start"
            id="start"
            defaultValue={date}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="web" className={styles.wrapInput}>
          Сайт проєкту
          <input
            type="text"
            name="web"
            id="web"
            defaultValue={project.web}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="duration" className={styles.wrapInput}>
          Тривалість розробки проєкту
          <input
            type="text"
            name="duration"
            id="duration"
            defaultValue={project.duration}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="difficult" className={styles.wrapInput}>
          Складність проєкту
          <input
            type="text"
            name="difficult"
            id="difficult"
            defaultValue={project.difficult}
            className={styles.inputText}
          />
        </label>
      </form>
    </div>
  );
}
