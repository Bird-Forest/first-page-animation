import React from "react";
import styles from "./Project.module.css";

export default function ProjectTeam({ item }) {
  const devDesigner = item.designer;
  const ArrDesigner = Array.isArray(devDesigner) && devDesigner.length > 0;

  const devFrontend = item.frontend;
  const ArrFrontend = Array.isArray(devFrontend) && devFrontend.length > 0;

  const devBackend = item.backend;
  const ArrBackend = Array.isArray(devBackend) && devBackend.length > 0;

  const devFullstack = item.fullstack;
  const ArrFullstack = Array.isArray(devFullstack) && devFullstack.length;

  const devManual = item.manual;
  const ArrManual = Array.isArray(devManual) && devManual.length;

  const devProject = item.project;
  const ArrProject = Array.isArray(devProject) && devProject.length;
  return (
    <div className={styles.teamList}>
      <div className={styles.objWrap}>
        <h4 className={styles.objTitle}>UI/UX designer</h4>
        <ul className={styles.devList}>
          {ArrDesigner ? (
            devDesigner.map((el, i) => (
              <li key={i} className={styles.elDev}>
                {el}
              </li>
            ))
          ) : (
            <p className={styles.objTitle}>Очікує свою команду</p>
          )}
        </ul>
      </div>
      <div className={styles.objWrap}>
        <h4 className={styles.objTitle}>Frontend</h4>
        <ul className={styles.devList}>
          {ArrFrontend ? (
            devFrontend.map((el, i) => (
              <li key={i} className={styles.elDev}>
                {el}
              </li>
            ))
          ) : (
            <p className={styles.objTitle}>Очікує свою команду</p>
          )}
        </ul>
      </div>
      <div className={styles.objWrap}>
        <h4 className={styles.objTitle}>Backend</h4>
        <ul className={styles.devList}>
          {ArrBackend ? (
            devBackend.map((el, i) => (
              <li key={i} className={styles.elDev}>
                {el}
              </li>
            ))
          ) : (
            <p className={styles.objTitle}>Очікує свою команду</p>
          )}
        </ul>
      </div>
      <div className={styles.objWrap}>
        <h4 className={styles.objTitle}>Full Stack</h4>
        <ul className={styles.devList}>
          {ArrFullstack ? (
            devFullstack.map((el, i) => (
              <li key={i} className={styles.elDev}>
                {el}
              </li>
            ))
          ) : (
            <p className={styles.objTitle}>Очікує свою команду</p>
          )}
        </ul>
      </div>
      <div className={styles.objWrap}>
        <h4 className={styles.objTitle}>QA Manual</h4>
        <ul className={styles.devList}>
          {ArrManual ? (
            devManual.map((el, i) => (
              <li key={i} className={styles.elDev}>
                {el}
              </li>
            ))
          ) : (
            <p className={styles.objTitle}>Очікує свою команду</p>
          )}
        </ul>
      </div>
      <div className={styles.objWrap}>
        <h4 className={styles.objTitle}>Project Manager</h4>
        <ul className={styles.devList}>
          {ArrProject ? (
            devProject.map((el, i) => (
              <li key={i} className={styles.elDev}>
                {el}
              </li>
            ))
          ) : (
            <p className={styles.objTitle}>Очікує свою команду</p>
          )}
        </ul>
      </div>
    </div>
  );
}
