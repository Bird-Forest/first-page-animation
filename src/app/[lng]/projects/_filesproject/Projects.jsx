"use client";

import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { FaCircle, FaBullseye } from "react-icons/fa";
import styles from "./Project.module.css";

export default function Projects({ items }) {
  const [projects, setProjects] = useState(items);

  const onСompleted = () => {
    const arr = items.reduce((acc, item) => {
      if (item.status.color === "#099e56") {
        acc.push(item);
      }
      return acc;
    }, []);
    setProjects(arr);
  };

  const inDeveloping = () => {
    const arr = items.reduce((acc, item) => {
      if (item.status.color === "#ffeb3b") {
        acc.push(item);
      }
      return acc;
    }, []);
    setProjects(arr);
  };

  const onStart = () => {
    const arr = items.reduce((acc, item) => {
      if (item.status.color === "#ff1744") {
        acc.push(item);
      }
      return acc;
    }, []);
    setProjects(arr);
  };

  const getAll = () => {
    setProjects(items);
  };
  return (
    <div className={styles.wrapProjects}>
      <div className={styles.wrapOptions}>
        <div className={styles.wrapFilter}>
          <button onClick={onСompleted} className={styles.btnFilter}>
            <FaCircle className={styles.iconGreen} />
          </button>
          <h4 className={styles.textFilter}>Завершено</h4>
        </div>
        <div className={styles.wrapFilter}>
          <button onClick={inDeveloping} className={styles.btnFilter}>
            <FaCircle className={styles.iconYellow} />
          </button>
          <h4 className={styles.textFilter}>В розробці</h4>
        </div>
        <div className={styles.wrapFilter}>
          <button onClick={onStart} className={styles.btnFilter}>
            <FaCircle className={styles.iconRed} />
          </button>
          <h4 className={styles.textFilter}>Формування команди</h4>
        </div>
        <div className={styles.wrapFilter}>
          <button onClick={getAll} className={styles.btnFilter}>
            <FaBullseye className={styles.iconWhite} />
          </button>
          <h4 className={styles.textFilter}>Всі наші проєкти</h4>
        </div>
      </div>
      <ul className={styles.wrapList}>
        {projects.map((item) => (
          <ProjectItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}
