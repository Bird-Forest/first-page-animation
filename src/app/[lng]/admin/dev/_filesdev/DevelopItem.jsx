import React from "react";
import styles from "./Develop.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  BsDiscord,
  BsEnvelopeAtFill,
  BsPersonRolodex,
  BsPinMapFill,
  BsStarFill,
  BsCalendar2Check,
} from "react-icons/bs";
import { MdImportantDevices } from "react-icons/md";
import { FaBroadcastTower, FaLinkedinIn } from "react-icons/fa";
import { format } from "date-fns";
import Image from "next/image";

export default function DevelopItem({ item }) {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapTitle}>
        <div className={styles.fotoDev}>
          <Image
            alt="foto of developer"
            src={item.foto}
            fill
            // width={80}
            // height={80}
            style={{ borderRadius: "12px" }}
          />
        </div>
        <p className={styles.titleDev}>{`${item.last + " " + item.first}`}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsCalendar2Check className={styles.iconDev} />
        <p className={styles.textDev}>{format(item.createdAt, "yyyy-MM-dd")}</p>
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
        <ul className={styles.wrapListElem}>
          {item.projects.map((el) => (
            <li key={uuidv4()} className={styles.wrapElem}>
              <BsStarFill className={styles.iconDevProj} />
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
