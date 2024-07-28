import React from "react";
import styles from "./Develop.module.css";

export default function DevelopItem({ item }) {
  return (
    <div className={styles.wrapCardDev}>
      <div className={styles.cardDev}>
        <h4>{`${item.last + " " + item.first}`}</h4>
        <p>
          <span>Speciality:</span> {item.speciality}
        </p>
        <p>
          <span>Email:</span> {item.email}
        </p>
        <p>
          <span>Discord nick:</span> {item.nick}
        </p>
        <p>
          <span>Linkendin link:</span> {item.link}
        </p>
        <p>
          <span>About finishing the course:</span>
          {item.cours}
        </p>
        <p>
          <span>About having experience:</span>
          {item.experience}
        </p>
        <p>
          <span>Аbout the motivation:</span>
          {item.motivation}
        </p>
        <p>
          <span>Аbout the resource:</span> {item.resource}
        </p>
        <p>
          <span>Country and city</span>
          {`${item.country + " " + item.city}`}
        </p>
      </div>
    </div>
  );
}
