"use client";

import React, { useState } from "react";
import styles from "./ProjectAdm.module.css";
import ProjectTeam from "../../../projects/_filesproject/ProjectTeam";
import {
  BsChevronUp,
  BsChevronDown,
  BsPersonFillCheck,
  BsPersonFillX,
  BsPersonPlusFill,
  BsPersonDashFill,
} from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { specialties } from "@/src/app/constant/constant";
import { getDevelopersForTeam } from "@/src/app/services/developers";
import { updateProject } from "@/src/app/services/projects";
import BtnAction from "../../_filesadmin/BtnAction";
import BtnSave from "../../_filesadmin/BtnSave";

export default function ProjectJoinTeam({ data, lng }) {
  const [item, setItem] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [specDev, setSpecDev] = useState("");
  const [field, setField] = useState(null);
  const [lastName, setLastName] = useState("");
  const [arrDevs, setArrDevs] = useState([]);

  function addDeveloper(value) {
    if (!value) return;
    let arr;
    if (specDev === "UI/UX designer") {
      arr = item.designer.push(value);
      setField({ designer: arr });
    } else if (specDev === "Backend") {
      arr = item.backend.push(value);
      setField({ backend: arr });
    } else if (specDev === "Frontend") {
      arr = item.frontend.push(value);
      setField({ frontend: arr });
    } else if (specDev === "Full Stack") {
      arr = item.fullstack.push(value);
      setField({ fullstack: arr });
    } else if (specDev === "QA Manual") {
      arr = item.manual.push(value);
      setField({ manual: arr });
    } else if (specDev === "Project Manager") {
      arr = item.project.push(value);
      setField({ project: arr });
    }
  }

  function deleteDeveloper(value) {
    if (!value) return;
    let arr;
    if (specDev === "UI/UX designer") {
      arr = item.designer.filter((el) => el._id !== value._id);
      setField({ designer: arr });
    } else if (specDev === "Backend") {
      arr = item.backend.filter((el) => el._id !== value._id);
      setField({ backend: arr });
    } else if (specDev === "Frontend") {
      arr = item.frontend.filter((el) => el._id !== value._id);
      setField({ frontend: arr });
    } else if (specDev === "Full Stack") {
      arr = item.fullstack.filter((el) => el._id !== value._id);
      setField({ fullstack: arr });
    } else if (specDev === "QA Manual") {
      arr = item.manual.filter((el) => el._id !== value._id);
      setField({ manual: arr });
    } else if (specDev === "Project Manager") {
      arr = item.project.filter((el) => el._id !== value._id);
      setField({ project: arr });
    }
  }

  const onClear = () => {
    setSpecDev("");
    setLastName("");
    setArrDevs([]);
  };

  const id = data._id;
  const Arr = Array.isArray(arrDevs) && arrDevs.length > 0;
  // console.log(item);
  // console.log(field);

  return (
    <div className={styles.wrapTeamPage}>
      <div className={styles.filterTeam}>
        <div className={styles.wrapSearchSpec}>
          <input
            type="text"
            id="specDev"
            name="specDev"
            defaultValue={specDev}
            readOnly={specDev}
            className={styles.inputSearch}
            placeholder="обрати спеціальність ..."
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
          <ul
            style={{
              display: !isOpen ? "none" : "block",
            }}
            className={styles.wrapOptions}
          >
            {specialties.map((el) => (
              <li
                key={el}
                name="special"
                value={el}
                className={styles.option}
                onClick={() => setSpecDev(el)}
              >
                {el}
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
              const arr = await getDevelopersForTeam(specDev, lastName);
              setArrDevs(arr);
            }}
            className={styles.filterBtn}
          >
            <BsPersonFillCheck className={styles.iconBtn} />
          </button>
          <button type="button" onClick={onClear} className={styles.filterBtn}>
            <BsPersonFillX className={styles.iconBtn} />
          </button>
        </div>
      </div>
      <ul className={styles.wrapList}>
        {Arr
          ? arrDevs.map((dev) => (
              <li key={uuidv4()} className={styles.wrapStrDev}>
                <dev className={styles.wrapDevName}>
                  <p className={styles.devName}>{`${
                    dev.last + " " + dev.first
                  }`}</p>
                </dev>
                <button
                  type="button"
                  onClick={() => addDeveloper(dev)}
                  className={styles.itemBtn}
                >
                  <BsPersonPlusFill className={styles.iconBtn} />
                </button>

                <button
                  type="button"
                  onClick={() => deleteDeveloper(dev)}
                  className={styles.itemBtn}
                >
                  <BsPersonDashFill className={styles.iconBtn} />
                </button>
              </li>
            ))
          : null}
      </ul>
      <BtnSave onClick={() => setItem(item)}>Зберегти</BtnSave>
      <ProjectTeam item={item} />
      <BtnAction item={item} id={id} formAction={updateProject}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
