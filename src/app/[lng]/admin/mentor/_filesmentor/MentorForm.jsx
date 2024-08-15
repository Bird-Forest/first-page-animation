"use client";

import React, { useState } from "react";
import styles from "./MentorAdm.module.css";
import BtnAction from "../../_filesadmin/BtnAction";
import BtnSave from "../../_filesadmin/BtnSave";
import MentorItem from "./MentorItem";
import { v4 as uuidv4 } from "uuid";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { specialties } from "@/src/app/constant/constant";

const works = ["12.00-15.00", "15.00-18.00", "18.00-21.00", "anytime"];

export default function MentorForm({ item, lng, formAction }) {
  const [mentor, setMentor] = useState(item);
  const [show, setShow] = useState(false);
  const [speciality, setSpeciality] = useState(item.speciality);
  const [workTime, setWorkTime] = useState([]);
  const [isCheck, setIsCheck] = useState(false);

  const id = item._id;

  const handleCheckBox = (evt) => {
    let check = evt.target.checked;
    setIsCheck(!check);
    // console.log(check);
    let hours = evt.target.value;
    console.log(hours);
    setWorkTime((prevState) => prevState.concat(hours));
  };
  console.log(workTime);
  console.log(isCheck);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const updateMentor = {
      createdAt: item.createdAt,
      first: formData.get("first"),
      last: formData.get("last"),
      email: formData.get("email"),
      nick: formData.get("nick"),
      foto: formData.get("tel"),
      link: formData.get("link"),
      tel: formData.get("tel"),
      speciality: speciality,
      time: workTime,
    };
    setMentor(updateMentor);
  };
  return (
    <div className={styles.wrapEdit}>
      <form onSubmit={handleSubmit} className={styles.wrapForm}>
        <label htmlFor="first" className={styles.wrapInput}>
          First name
          <input
            type="text"
            name="first"
            id="first"
            defaultValue={item.first}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="last" className={styles.wrapInput}>
          Last name
          <input
            type="text"
            name="last"
            id="last"
            defaultValue={item.last}
            className={styles.inputText}
          />
        </label>
        <div className={styles.wrapElemOptions}>
          <label htmlFor="speciality" className={styles.wrapInput}>
            Speciality
            <input
              type="text"
              name="speciality"
              id="speciality"
              value={speciality}
              readOnly={speciality}
              className={styles.inputText}
            />
          </label>
          <button
            type="button"
            onClick={() => setShow(!show)}
            className={styles.wrapIconBtn}
          >
            {show ? (
              <BsChevronDown className={styles.iconBtn} />
            ) : (
              <BsChevronUp className={styles.iconBtn} />
            )}
          </button>
          <div
            className={styles.wrapBlock}
            style={{
              display: !show ? "none" : "block",
            }}
          >
            <ul className={styles.wrapOptionsForm}>
              {specialties.map((el) => (
                <li
                  key={uuidv4()}
                  value={el}
                  onClick={() => setSpeciality(el)}
                  className={styles.textOptionForm}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <label htmlFor="email" className={styles.wrapInput}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={item.email}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="nick" className={styles.wrapInput}>
          Discord nick
          <input
            type="text"
            name="nick"
            id="nick"
            defaultValue={item.nick}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="link" className={styles.wrapInput}>
          Linkendin link
          <input
            type="text"
            name="link"
            id="link"
            defaultValue={item.link}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="tel" className={styles.wrapInput}>
          Phone
          <input
            type="tel"
            name="tel"
            id="tel"
            defaultValue={item.tel}
            className={styles.inputText}
          />
        </label>
        <div className={styles.wrapTime}>
          <p className={styles.titleTime}>Time for consultation</p>
          <ul
            role="group"
            aria-labelledby="checkbox-group"
            className={styles.wrapTimeList}
          >
            {works.map((el, i) => (
              <li key={uuidv4()} className={styles.elemTime}>
                <input
                  name="time"
                  value={el}
                  type="checkbox"
                  onChange={handleCheckBox}
                  defaultValue={el}
                  multiple={true}
                  //   checked={isCheck}
                  //   className={
                  //     isCheck
                  //       ? styles.checkBox + " " + styles.checkTrue
                  //       : styles.checkBox + " " + styles.checkFalse
                  //   }
                />
                <p className={styles.checkText}>{el}</p>
              </li>
            ))}
          </ul>
        </div>

        <BtnSave>Зберегти</BtnSave>
      </form>
      {!item ? null : <MentorItem item={mentor} />}
      <BtnAction item={mentor} lng={lng} id={id} formAction={formAction}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
