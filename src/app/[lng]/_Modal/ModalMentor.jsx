"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";
import InputCheckbox from "./forma/InputCheckbox";
import InputUserData from "./forma/InputUserData";
import InputCheckAgree from "./forma/InputCheckAgree";
import Spinner from "../_Helper/Spinner";
import { useTranslation } from "@/src/app/i18n/client";

// import ListCheckBox from "./forma/ListCheckBox";

export const specialties = [
  "UI/UX designer",
  "Backend",
  "Frontend",
  "Fullstack engineer",
  "QA Manual engineer",
  "Project Manager",
];

const works = ["12.00-15.00", "15.00-18.00", "18.00-21.00", "anytime"];

const regexp = /^(\\+38)?0[0-9]{9}$/;

const initialValues = {
  name: "",
  surname: "",
  email: "",
  tel: "",
  nick: "",
  link: "",
  agree: "",
  speciality: [],
  time: [],
};

// https://www.linkedin.com/in/maria-barvinok/

// const validationSchema = Yup.object({
//   name: Yup.string().required({t("error_name")}),
//   surname: Yup.string().required("Вкажіть прізвище"),
//   email: Yup.string().email("відсутній @").required("Вкажіть електронну пошту"),
//   tel: Yup.string()
//     .matches(regexp, "10 цифр, починаючи з 0")
//     .required("Вкажіть номер телефону"),
//   nick: Yup.string().required("Вкажіть нік в Discord"),
//   link: Yup.string().url().required("Вкажіть профіль в Linkedin"),
//   agree: Yup.boolean().required("Надайте згоду"),
//   speciality: Yup.array().of(Yup.string()).min(1, "Зробіть вибір"),
//   time: Yup.array().of(Yup.string()).min(1, "Зробіть вибір"),
// });

export default function ModalMentor({ closeModal, lng }) {
  const { t } = useTranslation(lng, "modal");

  const validationSchema = Yup.object({
    name: Yup.string().required(`${t("error_name")}`),
    surname: Yup.string().required(`${t("error_surname")}`),
    email: Yup.string()
      .email("відсутній @")
      .required(`${t("error_email")}`),
    tel: Yup.string()
      .matches(regexp, "10 цифр, починаючи з 0")
      .required(`${t("error_tel")}`),
    nick: Yup.string().required(`${t("error_nick")}`),
    link: Yup.string()
      .url()
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
    <div className={styles.wrapModalForm} onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <IoClose className={styles.close} />
      </button>
      <div className={styles.modalForm}>
        <h4 className={styles.titleModal}>
          {t("mentor_title")}
          {/* Реєстрація ментора <br /> на Baza Trainee Ukraine */}
        </h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(true);
              console.log(values);
              resetForm();
            }, 400);
          }}
        >
          {(props) => (
            <Form className={styles.wrapForm} autoComplete="off">
              <div className={styles.wrapData}>
                <InputUserData
                  label={t("name")}
                  name="name"
                  type="text"
                  // placeholder="Iм’я"
                />
                <InputUserData
                  label={t("surname")}
                  name="surname"
                  type="text"
                  // placeholder="Прізвище"
                />
                <h4 className={styles.subtitle}>
                  {t("special_title")}
                  <span className={styles.red}>{" *"}</span>
                </h4>
                <ul
                  className={styles.wrapCheck}
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  {specialties.map((item, i) => (
                    <InputCheckbox
                      name="speciality"
                      key={i}
                      value={item}
                      type="checkbox"
                      multiple={true}
                      checked={false}
                    >
                      {item}
                    </InputCheckbox>
                  ))}
                </ul>
                <InputUserData
                  label={t("email")}
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                />
                <InputUserData
                  label={t("phone")}
                  name="tel"
                  type="tel"
                  placeholder="+38 XXX XXX XX XX"
                />
                <InputUserData
                  label={t("discord")}
                  name="nick"
                  type="text"
                  // placeholder="Discord"
                />
                <InputUserData
                  label={t("linkedin")}
                  name="link"
                  type="url"
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
                  {works.map((item, i) => (
                    <InputCheckbox
                      name="time"
                      key={i}
                      value={item}
                      type="checkbox"
                      multiple={true}
                      checked={false}
                    >
                      {t(item)}
                    </InputCheckbox>
                  ))}
                </ul>
              </div>
              <div className={styles.wrapAgree}>
                <InputCheckAgree name="agree" type="checkbox" checked={false}>
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
      </div>
    </div>
  );
}
