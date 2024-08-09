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
  const [field, setField] = useState(null);
  const [lastName, setLastName] = useState("");
  const [specDev, setSpecDev] = useState("");
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
    let arr;
    switch (specDev) {
      case "UI/UX designer":
        arr = item.designer.filter((el) => el._id !== value._id);
        setField((item.designer = arr));
        break;
      case "Backend":
        arr = item.backend.filter((el) => el._id !== value._id);
        setField((item.backend = arr));
        break;
      case "Frontend":
        arr = item.frontend.filter((el) => el._id !== value._id);
        setField((item.frontend = arr));
        break;
      case "Full Stack":
        arr = item.fullstack.filter((el) => el._id !== value._id);
        setField((item.fullstack = arr));
        break;
      case "QA Manual":
        arr = item.manual.filter((el) => el._id !== value._id);
        setField((item.manual = arr));
        break;
      case "Project Manager":
        arr = item.project.filter((el) => el._id !== value._id);
        setField((item.project = arr));
        break;
      default:
        console.log("Маємо надію, що ця сторінка виглядає добре!");
    }
  }

  const onClear = () => {
    setSpecDev("");
    setLastName("");
    setArrDevs([]);
  };

  const id = data._id;
  const Arr = Array.isArray(arrDevs) && arrDevs.length > 0;

  return (
    <div className={styles.wrapTeamPage}>
      <div className={styles.filterTeam}>
        <div className={styles.searchSpec}>
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
          <div
            style={{
              display: !isOpen ? "none" : "block",
              position: "absolute",
              top: "50px",
            }}
          >
            <ul className={styles.specOptions}>
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
        </div>
        <div className={styles.searchLast}>
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
      <ul className={styles.wrapListDev}>
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
      <BtnAction item={item} id={id} formAction={updateProject} lng={lng}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
