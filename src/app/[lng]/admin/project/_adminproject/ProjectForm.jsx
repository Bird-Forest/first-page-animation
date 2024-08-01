"use client";

import React, { useState } from "react";
import styles from "./ProjectAdm.module.css";
import { v4 as uuidv4 } from "uuid";
import { BsChevronUp, BsChevronDown, BsCircleFill } from "react-icons/bs";
import { formatISO } from "date-fns";
import ProjectCover from "../../../projects/_filesproject/ProjectCover";
import BtnAction from "../../_filesadmin/BtnAction";
import BtnSave from "../../_filesadmin/BtnSave";

const start = { color: "#ff1744", text: "Формування команди" };
const inital = { color: "#ffeb3b", text: "В розробці" };
const finish = { color: "#099e56", text: "Завершено" };
export const arrStatus = [start, inital, finish];

export default function ProjectForm({ project, lng, formAction }) {
  const [item, setItem] = useState(null);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(!project ? start : project.status);
  const id = !project ? null : project._id;
  const date = !project ? formatISO(new Date()) : project.start;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const newItem = {
      status: status,
      start: date,
      name: formData.get("name"),
      web: formData.get("web"),
      duration: formData.get("duration"),
      difficult: formData.get("difficult"),
      imageUrl: formData.get("imageUrl"),
    };
    setItem(newItem);
  };

  return (
    <div className={styles.wrapAdmProject}>
      <form onSubmit={handleSubmit} className={styles.wrapForm}>
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
          <div className={styles.wrapIconBtn}>
            <BsCircleFill style={{ fill: status.color }} />
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
            defaultValue={!project ? "Тимчасово недоступний" : project.web}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="duration" className={styles.wrapInput}>
          Тривалість розробки проєкту
          <input
            type="text"
            name="duration"
            id="duration"
            defaultValue={!project ? null : project.duration}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="difficult" className={styles.wrapInput}>
          Складність проєкту
          <input
            type="text"
            name="difficult"
            id="difficult"
            defaultValue={!project ? null : project.difficult}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="imageUrl" className={styles.wrapInput}>
          Фон для проєкту
          <input
            type="url"
            name="imageUrl"
            id="imageUrl"
            defaultValue={!project ? null : project.imageUrl}
            className={styles.inputText}
          />
        </label>
        <BtnSave>Зберегти</BtnSave>
      </form>
      <div>
        {!item ? <p>Попередній перегляд</p> : <ProjectCover item={item} />}
      </div>
      <BtnAction item={item} lng={lng} id={id} formAction={formAction}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
