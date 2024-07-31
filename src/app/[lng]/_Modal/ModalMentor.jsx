"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";
import InputCheckbox from "./forma/InputCheckbox";
import InputUserData from "./forma/InputUserData";
import InputCheckAgree from "./forma/InputCheckAgree";
import Spinner from "../_Helper/Spinner";
import { useTranslation } from "@/src/app/i18n/client";
import { createMentor } from "../../services/mentors";
import InputRadio from "./forma/InputRadio";

export const specialties = [
  "UI/UX designer",
  "Backend",
  "Frontend",
  "Full Stack",
  "QA Manual",
  "Project Manager",
];
// https://www.linkedin.com/company/baza-trainee-ukraine/
const works = ["12.00-15.00", "15.00-18.00", "18.00-21.00", "anytime"];

const regexp = /^(\\+38)?0[0-9]{9}$/;

const initialValues = {
  first: "",
  last: "",
  email: "",
  tel: "",
  nick: "",
  link: "",
  agree: "",
  speciality: [],
  time: [],
};

export default function ModalMentor({ formAction, item, lng }) {
  const { t } = useTranslation(lng, "modal");
  const [mess, setMess] = useState(" ");

  const validationSchema = Yup.object({
    first: Yup.string()
      .trim()
      .required(`${t("error_name")}`),
    last: Yup.string()
      .trim()
      .required(`${t("error_surname")}`),
    email: Yup.string()
      .email("відсутній @")
      .required(`${t("error_email")}`),
    tel: Yup.string()
      .matches(regexp, "10 цифр, починаючи з 0")
      .required(`${t("error_tel")}`),
    nick: Yup.string().required(`${t("error_nick")}`),
    link: Yup.string()
      .url()
      .trim()
      .required(`${t("error_link")}`),
    agree: Yup.boolean().required(`${t("error_agree")}`),
    speciality: Yup.array()
      .of(Yup.string())
      .min(1, `${t("error_select")}`),
    time: Yup.array()
      .of(Yup.string())
      .min(1, `${t("error_select")}`),
  });
  return (
    // <div className={styles.wrapModalForm} onClick={(e) => e.stopPropagation()}>
    //   <button type="button" onClick={closeModal} className={styles.closeBtn}>
    //     <IoClose className={styles.close} />
    //   </button>
    <div className={styles.modalForm}>
      <h4 className={styles.titleModal}>{t("mentor_title")}</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const message = await formAction(values);
          setSubmitting(true);
          setMess(message);
          console.log(values);
          resetForm();
        }}
      >
        {(props) => (
          <Form className={styles.wrapForm} autoComplete="off">
            <div className={styles.wrapData}>
              <InputUserData
                label={t("first")}
                name="first"
                type="text"
                defaultValue={!item ? null : item.first}
                // placeholder="Iм’я"
              />
              <InputUserData
                label={t("last")}
                name="last"
                type="text"
                defaultValue={!item ? null : item.last}
                // placeholder="Прізвище"
              />
              <h4 className={styles.subtitle}>
                {t("special_title")}
                <span className={styles.red}>{" *"}</span>
              </h4>
              <ul
                className={styles.wrapCheck}
                role="group"
                aria-labelledby="radio-group"
              >
                {specialties.map((el, i) => (
                  <InputRadio
                    name="speciality"
                    key={i}
                    type="radio"
                    value={el}
                    multiple={false}
                    checked={false}
                  >
                    {el}
                  </InputRadio>
                ))}
              </ul>
              <InputUserData
                label={t("email")}
                name="email"
                type="email"
                defaultValue={!item ? null : item.email}
                placeholder="email@gmail.com"
              />
              <InputUserData
                label={t("phone")}
                name="tel"
                type="tel"
                defaultValue={!item ? null : item.tel}
                placeholder="+38 XXX XXX XX XX"
              />
              <InputUserData
                label={t("discord")}
                name="nick"
                type="text"
                defaultValue={!item ? null : item.nick}
                // placeholder="Discord"
              />
              <InputUserData
                label={t("linkedin")}
                name="link"
                type="url"
                defaultValue={!item ? null : item.link}
                // placeholder="Лінк на профіль"
              />
              <h4 className={styles.subtitle}>
                {t("time_title")}
                <span className={styles.red}>{" *"}</span>
              </h4>
              <ul
                className={styles.wrapCheck}
                role="group"
                aria-labelledby="checkbox-group"
              >
                {works.map((el, i) => (
                  <InputCheckbox
                    name="time"
                    key={i}
                    value={el}
                    type="checkbox"
                    defaultValue={!item ? null : item.time[i]}
                    multiple={true}
                    checked={false}
                  >
                    {t(el)}
                  </InputCheckbox>
                ))}
              </ul>
            </div>
            <div className={styles.wrapAgree}>
              <InputCheckAgree
                name="agree"
                type="checkbox"
                checked={false}
                defaultValue={!item ? null : item.agree}
              >
                {t("agree")}
              </InputCheckAgree>
            </div>
            <div className={styles.wrapBtnForm}>
              <button
                type="submit"
                className={`${styles.btnPay} ${styles.active}`}
              >
                {props.isSubmitting ? <Spinner /> : `${t("btn_send")}`}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p className={styles.formMess}>{mess.message}</p>
    </div>
    // </div>
  );
}
