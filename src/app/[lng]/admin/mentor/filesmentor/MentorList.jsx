"use client";

import React, { useState } from "react";
import Loading from "../../../_Helper/Loading";
import MentorString from "./MentorString";
import styles from "./MentorAdm.module.css";
import { v4 as uuidv4 } from "uuid";
import { useFormStatus } from "react-dom";
import {
  BsChevronUp,
  BsChevronDown,
  BsPersonFillCheck,
  BsPersonFillX,
} from "react-icons/bs";
import { getMentorsBySpeciality } from "@/src/app/services/mentors";
import { specialties } from "@/src/app/constant/constant";

export default function MentorList({ mentors, lng }) {
  const [items, setItems] = useState(mentors);
  const [isOpen, setIsOpen] = useState(false);
  const [special, setSpecial] = useState("");
  const { pending } = useFormStatus();

  console.log(mentors);

  const onClear = () => {
    setItems(mentors);
    setSpecial("");
  };
  return (
    <div className={styles.wrapFilterList}>
      <div className={styles.filter}>
        <div className={styles.wrapSearch}>
          <button type="button" onClick={onClear} className={styles.filterBtn}>
            <BsPersonFillX className={styles.iconBtn} />
          </button>
          <input
            type="text"
            id="special"
            name="special"
            defaultValue={special}
            readOnly={special}
            className={styles.inputSearch}
            placeholder="пошук за спеціальніст’ю ..."
          />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={styles.filterBtn}
          >
            {isOpen ? (
              <BsChevronDown className={styles.iconBtn} />
            ) : (
              <BsChevronUp className={styles.iconBtn} />
            )}
          </button>

          <button
            type="button"
            onClick={async () => {
              const arrSpeciality = await getMentorsBySpeciality(special);
              setItems(arrSpeciality);
            }}
            className={styles.filterBtn}
          >
            <BsPersonFillCheck className={styles.iconBtn} />
          </button>
          <ul
            style={{
              display: !isOpen ? "none" : "block",
            }}
            className={styles.wrapOptions}
          >
            {specialties.map((item) => (
              <li
                key={item}
                name="special"
                value={item}
                className={styles.option}
                onClick={() => setSpecial(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={styles.wrapSearch}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.inputSearch}
            placeholder="пошук за прізвищем ..."
          />
          <button
            type="button"
            onClick={async () => {
              const arrLastName = await getDevelopersByLastName(lastName);
              setItems(arrLastName);
            }}
            className={styles.filterBtn}
          >
            <BsPersonFillCheck className={styles.iconBtn} />
          </button>
          <button type="button" onClick={onClear} className={styles.filterBtn}>
            <BsPersonFillX className={styles.iconBtn} />
          </button>
        </div> */}
      </div>
      <ul className={styles.wrapList}>
        {pending ? (
          <Loading />
        ) : (
          items.map((item) => (
            <MentorString key={uuidv4()} item={item} lng={lng} />
          ))
        )}
      </ul>
    </div>
  );
}
