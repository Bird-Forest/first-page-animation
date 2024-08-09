"use client";

import React, { useState } from "react";
import Loading from "../../../_Helper/Loading";
import { v4 as uuidv4 } from "uuid";
import styles from "./ProjectAdm.module.css";
import ProjectString from "./ProjectString";
import { useFormStatus } from "react-dom";
import { FaCircle, FaBullseye } from "react-icons/fa";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import {
  getProjectsByStatus,
  getProjectsByTitle,
} from "@/src/app/services/projects";

export default function ProjectList({ projects, lng }) {
  const [items, setItems] = useState(projects);
  const [word, setWord] = useState("");
  const { pending } = useFormStatus();

  const start = { color: "#ff1744", text: "Формування команди" };
  const init = { color: "#ffeb3b", text: "В розробці" };
  const finish = { color: "#099e56", text: "Завершено" };

  const onClear = () => {
    setItems(projects);
    setWord(" ");
  };
  return (
    <div className={styles.wrapFilterList}>
      <div className={styles.filter}>
        <button type="button" onClick={onClear} className={styles.filterBtn}>
          <BsZoomOut className={styles.iconSearch} />
        </button>
        <input
          autoFocus
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="пошук ..."
          className={styles.inputSearch}
        />
        <button
          type="button"
          onClick={async () => {
            const sortTitle = await getProjectsByTitle(word);
            setItems(sortTitle);
          }}
          className={styles.filterBtn}
        >
          <BsZoomIn className={styles.iconSearch} />
        </button>
        <button
          type="button"
          onClick={async () => {
            const sortStatus = await getProjectsByStatus(start);
            setItems(sortStatus);
          }}
          className={styles.filterBtn}
        >
          <FaCircle className={styles.statusIcon} style={{ fill: "#ff1744" }} />
        </button>
        <button
          type="button"
          onClick={async () => {
            const sortStatus = await getProjectsByStatus(init);
            setItems(sortStatus);
          }}
          className={styles.filterBtn}
        >
          <FaCircle className={styles.statusIcon} style={{ fill: "#ffeb3b" }} />
        </button>
        <button
          type="button"
          onClick={async () => {
            const sortStatus = await getProjectsByStatus(finish);
            setItems(sortStatus);
          }}
          className={styles.filterBtn}
        >
          <FaCircle className={styles.statusIcon} style={{ fill: "#099e56" }} />
        </button>
        <button type="button" onClick={onClear} className={styles.filterBtn}>
          <FaBullseye
            className={styles.statusIcon}
            style={{ fill: "#e231a8" }}
          />
        </button>
      </div>

      <ul className={styles.wrapList}>
        {pending ? (
          <Loading />
        ) : (
          items.map((item) => (
            <ProjectString key={uuidv4()} item={item} lng={lng} />
          ))
        )}
      </ul>
    </div>
  );
}
