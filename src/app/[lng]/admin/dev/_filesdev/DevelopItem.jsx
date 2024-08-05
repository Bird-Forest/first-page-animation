import React from "react";
import styles from "./Develop.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  BsFillGeoFill,
  BsDiscord,
  BsEnvelopeAtFill,
  BsPersonRolodex,
  BsPinMapFill,
} from "react-icons/bs";
import { MdImportantDevices } from "react-icons/md";
import { FaUserGraduate, FaBroadcastTower, FaLinkedinIn } from "react-icons/fa";

export default function DevelopItem({ item }) {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapTitle}>
        <FaUserGraduate className={styles.iconDev} />
        <p className={styles.titleDev}>{`${item.last + " " + item.first}`}</p>
      </div>
      <div className={styles.wrapInfo}>
        <MdImportantDevices className={styles.iconDev} />
        <p className={styles.textDev}>{item.speciality}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsEnvelopeAtFill className={styles.iconDev} />
        <p className={styles.textDev}>{item.email}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsPinMapFill className={styles.iconDev} />
        <p className={styles.textDev}>{`${item.country + " " + item.city}`}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsDiscord className={styles.iconDev} />
        <p className={styles.textDev}>{item.nick}</p>
      </div>
      <div className={styles.wrapInfo}>
        <FaLinkedinIn className={styles.iconDev} />
        <a
          href="https://www.linkedin.com/company/baza-trainee-ukraine/"
          className={styles.linkDev}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.link}
        </a>
      </div>
      <div className={styles.wrapInfo}>
        <FaBroadcastTower className={styles.iconDev} />
        <p className={styles.textDev}>{item.resource}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsPersonRolodex className={styles.iconDev} />
        <ul className={styles.wrapProjects}>
          {item.projects.map((el) => (
            <li key={uuidv4()} className={styles.textDev}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
