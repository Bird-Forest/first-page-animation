"use client";

import React, { useEffect, useState } from "react";
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
import ProjectDevString from "./ProjectDevString";
import { addDeveloperToProject } from "@/src/app/services/projects";
import BtnAction from "../../_filesadmin/BtnAction";

export default function ProjectJoinTeam({ data, lng }) {
  const [item, setItem] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [specDev, setSpecDev] = useState("");
  const [field, setField] = useState(null);
  const [lastName, setLastName] = useState("");
  const [arrDevs, setArrDevs] = useState([]);

  // useEffect(() => {
  //   if (specDev === "UI/UX designer") setField({ designer: [] });
  //   if (specDev === "Backend") setField("backend");
  //   if (specDev === "Frontend") setField("frontend");
  //   if (specDev === "Full Stack") setField("fullstack");
  //   if (specDev === "QA Manual") setField("manual");
  //   if (specDev === "Project Manager") setField("project");
  //   return () => {};
  // }, [specDev, data]);

  function addDeveloper(value) {
    if (!value) return;
    let arr;
    if (specDev === "UI/UX designer") {
      arr = item.designer;
      arr.push(value);
      setField({ designer: arr });
    } else if (specDev === "Backend") {
      arr = item.backend;
      setField({ backend: arr });
      arr.push(value);
    } else if (specDev === "Frontend") {
      arr = item.frontend;
      setField({ frontend: arr });
      arr.push(value);
    } else if (specDev === "Full Stack") {
      arr = item.fullstack;
      setField({ fullstack: arr });
      arr.push(value);
    } else if (specDev === "QA Manual") {
      arr = item.manual;
      setField({ manual: arr });
      arr.push(value);
    } else if (specDev === "Project Manager") {
      arr = item.project;
      setField({ project: arr });
      arr.push(value);
    }
  }

  const onClear = () => {
    setSpecDev("");
    setLastName("");
    setArrDevs([]);
  };

  const id = data._id;

  const Arr = Array.isArray(arrDevs) && arrDevs.length > 0;
  // const arr = item.designer;
  console.log("FIELD", field);

  console.log(item);
  return (
    <div className={styles.wrapTeamPage}>
      <div className={styles.filter}>
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
                  // onClick={() => fieldProject.findIndex(i).splice(i, 1)}
                  className={styles.itemBtn}
                >
                  <BsPersonDashFill className={styles.iconBtn} />
                </button>
              </li>
              // <ProjectDevString
              //   key={uuidv4()}
              //   dev={dev}
              //   field={fieldProject}
              //   idx={idx}
              // />
            ))
          : null}
      </ul>
      <ProjectTeam item={item} />
      <BtnAction item={item} id={id} formAction={addDeveloperToProject}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
