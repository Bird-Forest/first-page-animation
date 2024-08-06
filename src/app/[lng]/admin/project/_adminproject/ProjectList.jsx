"use client";

import React, { useState } from "react";
import Loading from "../../../_Helper/Loading";
import { v4 as uuidv4 } from "uuid";
import styles from "./ProjectAdm.module.css";
import ProjectString from "./ProjectString";
import { useFormStatus } from "react-dom";
import { FaCircle, FaBullseye } from "react-icons/fa";
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsZoomIn,
  BsZoomOut,
} from "react-icons/bs";

export default function ProjectList({ projects, lng }) {
  const [items, setItems] = useState(projects);
  const [word, setWord] = useState("");
  const [sortDate, setSortDate] = useState(false);
  const { pending } = useFormStatus();

  const onSearch = () => {
    let arr = [];
    items.map((item) => {
      const title = item.name.toLowerCase().includes(word.toLowerCase());
      if (title === true) {
        arr.push(item);
      }
    });
    setItems(arr);
  };
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
        <button type="button" onClick={onSearch} className={styles.filterBtn}>
          <BsZoomIn className={styles.iconSearch} />
        </button>
        <button type="button" className={styles.filterBtn}>
          <FaCircle className={styles.statusIcon} style={{ fill: "#ff1744" }} />
        </button>
        <button type="button" className={styles.filterBtn}>
          <FaCircle className={styles.statusIcon} style={{ fill: "#ffeb3b" }} />
        </button>
        <button type="button" className={styles.filterBtn}>
          <FaCircle className={styles.statusIcon} style={{ fill: "#099e56" }} />
        </button>
        <button type="button" className={styles.filterBtn}>
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
