import React from "react";
import {
  BsDiscord,
  BsEnvelopeAtFill,
  BsPersonRolodex,
  BsPinMapFill,
  BsStarFill,
  BsCalendar2Check,
  BsClock,
  BsTelephoneInboundFill,
  BsWatch,
  BsLinkedin,
} from "react-icons/bs";
import { MdImportantDevices } from "react-icons/md";
import { FaBroadcastTower, FaLinkedinIn } from "react-icons/fa";
import styles from "./MentorAdm.module.css";
import { v4 as uuidv4 } from "uuid";

export default function MentorItem({ item }) {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapName}>
        <p className={styles.nameMentor}>{`${item.last + " " + item.first}`}</p>
      </div>
      <div className={styles.wrapInfo}>
        <MdImportantDevices className={styles.iconMent} />
        <p className={styles.text}>{item.speciality}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsEnvelopeAtFill className={styles.iconMent} />
        <p className={styles.text}>{item.email}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsDiscord className={styles.iconMent} />
        <p className={styles.text}>{item.nick}</p>
      </div>
      <div className={styles.wrapInfo}>
        <BsLinkedin className={styles.iconMent} />
        <a
          href="https://www.linkedin.com/company/baza-trainee-ukraine/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.link}
        </a>
      </div>
      <div className={styles.wrapInfo}>
        <BsTelephoneInboundFill className={styles.iconTel} />
        <p className={styles.text}>{item.tel}</p>
      </div>
      <div className={styles.wrapInfoList}>
        <BsWatch className={styles.iconMent} />
        <ul className={styles.wrapListElem}>
          {item.time.map((el) => (
            <li key={uuidv4()} className={styles.wrapElem}>
              <BsStarFill className={styles.iconStyle} />
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
