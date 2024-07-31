"use client";

import React, { useState } from "react";
import Loading from "../../../_Helper/Loading";
import DevelopString from "./DevelopString";
import { v4 as uuidv4 } from "uuid";
import styles from "./Develop.module.css";
import { useFormStatus } from "react-dom";
import {
  BsChevronUp,
  BsChevronDown,
  BsPeopleFill,
  BsPersonFillCheck,
  BsPersonFillX,
} from "react-icons/bs";
import { specialties } from "../../../_Modal/ModalMentor";
import {
  getDevelopersByLastName,
  getDevelopersBySpeciality,
} from "@/src/app/services/developers";

export default function DevelopList({ lng, devs }) {
  const [items, setItems] = useState(devs);
  const [isOpen, setIsOpen] = useState(false);
  const [special, setSpecial] = useState("");
  const [lastName, setLastName] = useState("");
  const { pending } = useFormStatus();

  const onClear = () => {
    setItems(devs);
    setLastName("");
    setSpecial("");
  };

  return (
    <dev className={styles.wrapFilterList}>
      <div className={styles.filter}>
        <div className={styles.wrapSearch}>
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
              const arrSpeciality = await getDevelopersBySpeciality(special);
              setItems(arrSpeciality);
            }}
            className={styles.filterBtn}
          >
            <BsPeopleFill className={styles.iconBtn} />
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
        <div className={styles.wrapSearch}>
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
          <button className={styles.filterBtn}>
            <BsPersonFillX onClick={onClear} className={styles.iconBtn} />
          </button>
        </div>
      </div>
      <ul className={styles.wrapList}>
        {pending ? (
          <Loading />
        ) : (
          items.map((item) => (
            <DevelopString key={uuidv4()} item={item} lng={lng} />
          ))
        )}
      </ul>
    </dev>
  );
}
