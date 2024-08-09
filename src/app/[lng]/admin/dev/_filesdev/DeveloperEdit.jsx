"use client";

import React, { useState } from "react";
import styles from "./Develop.module.css";
import { v4 as uuidv4 } from "uuid";
import BtnSave from "../../_filesadmin/BtnSave";
import BtnAction from "../../_filesadmin/BtnAction";
import DevelopItem from "./DevelopItem";
import { BsChevronUp, BsChevronDown, BsPersonRolodex } from "react-icons/bs";
import { specialties } from "@/src/app/constant/constant";

export default function DeveloperEdit({ item, lng, formAction, projects }) {
  const [dev, setDev] = useState(item);
  const [show, setShow] = useState(false);
  const [speciality, setSpeciality] = useState(dev.speciality);
  const [projectDev, setProjectDev] = useState(
    !item.projects ? [] : item.projects
  );
  const id = item._id;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const updateDev = {
      createdAt: item.createdAt,
      first: formData.get("first"),
      last: formData.get("last"),
      email: formData.get("email"),
      nick: formData.get("nick"),
      foto: formData.get("foto"),
      link: formData.get("link"),
      country: formData.get("country"),
      city: formData.get("city"),
      resource: formData.get("resource"),
      speciality: speciality,
      projects: projectDev,
    };
    setDev(updateDev);
  };

  const addProjectToDev = () => {
    const projectsOfDeveloper = projects.reduce((acc, project) => {
      if (project.designer.filter((dev) => dev._id === id)) {
        acc.push(project.name);
      } else if (project.backend.filter((dev) => dev._id === id)) {
        acc.push(project.name);
      } else if (project.frontend.filter((dev) => dev._id === id)) {
        acc.push(project.name);
      } else if (project.fullstack.filter((dev) => dev._id === id)) {
        acc.push(project.name);
      } else if (project.manual.filter((dev) => dev._id === id)) {
        acc.push(project.name);
      } else if (project.project.filter((dev) => dev._id === id)) {
        acc.push(project.name);
      }
      return acc;
    }, []);
    setProjectDev(projectsOfDeveloper);
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
        <label htmlFor="foto" className={styles.wrapInput}>
          Foto in Linkendin link
          <input
            type="url"
            name="foto"
            id="foto"
            defaultValue={item.foto}
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
        <label htmlFor="country" className={styles.wrapInput}>
          Country
          <input
            type="text"
            name="country"
            id="country"
            defaultValue={item.country}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="city" className={styles.wrapInput}>
          City
          <input
            type="text"
            name="city"
            id="city"
            defaultValue={item.city}
            className={styles.inputText}
          />
        </label>
        <div className={styles.wrapElemOptions}>
          <label htmlFor="projects" className={styles.wrapInput}>
            Projects
            <input
              type="text"
              name="projects"
              id="projects"
              value={projectDev}
              className={styles.inputText}
            />
          </label>
          <button
            type="button"
            onClick={addProjectToDev}
            className={styles.wrapIconBtn}
          >
            <BsPersonRolodex className={styles.iconBtn} />
          </button>
        </div>
        <label htmlFor="resource" className={styles.wrapInput}>
          Resource
          <input
            type="text"
            name="resource"
            id="resource"
            defaultValue={item.resource}
            className={styles.inputText}
          />
        </label>
        <BtnSave>Зберегти</BtnSave>
      </form>
      {!item ? null : <DevelopItem item={dev} />}
      <BtnAction item={dev} lng={lng} id={id} formAction={formAction}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
