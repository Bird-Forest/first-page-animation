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
import { specialties } from "./ModalMentor";
import InputRadio from "./forma/InputRadio";
import { useTranslation } from "@/src/app/i18n/client";

// const resources = [
//   "сайт Baza Trainee Ukraine",
//   "сторінка Baza Educat в Instagram",
//   "сторінка Baza Educat в Facebook",
//   "канал Baza Go в Telegram",
//   "пост на LinkedIn",
// ];

const resources = ["sourse1", "sourse2", "sourse3", "sourse4", "sourse5"];

const initialValues = {
  name: "",
  surname: "",
  email: "",
  city: "",
  country: "",
  nick: "",
  link: "",
  course: "",
  experience: "",
  motivation: "",
  resource: "",
  rule: "",
  agree: "",
  speciality: [],
};

// https://www.linkedin.com/in/maria-barvinok/

const validationSchema = Yup.object({
  name: Yup.string().required("Вкажіть ім’я"),
  surname: Yup.string().required("Вкажіть прізвище"),
  email: Yup.string().email("відсутній @").required("Вкажіть електронну пошту"),
  city: Yup.string().required("Вкажіть місто"),
  country: Yup.string().required("Вкажіть країну"),
  nick: Yup.string().required("Вкажіть нік в Discord"),
  link: Yup.string().url().required("Вкажіть профіль в Linkedin"),
  course: Yup.string().required("Вкажіть назву курсу"),
  experience: Yup.string().required("Зробіть вибір"),
  motivation: Yup.string().required("Вкажіть мотивацію"),
  resource: Yup.string().oneOf(resources).required("Зробіть вибір"),
  agree: Yup.boolean().required("Надайте згоду"),
  rule: Yup.boolean().required("Надайте згоду"),
  speciality: Yup.array().of(Yup.string()).min(1, "Зробіть вибір"),
});

export default function ModalTrainee({ closeModal, lng }) {
  const { t } = useTranslation(lng, "modal");

  const validationSchema = Yup.object({
    name: Yup.string().required(`${t("error_name")}`),
    surname: Yup.string().required(`${t("error_surname")}`),
    email: Yup.string()
      .email("відсутній @")
      .required(`${t("error_email")}`),
    city: Yup.string().required(`${t("error_city")}`),
    country: Yup.string().required(`${t("error_country")}`),
    nick: Yup.string().required(`${t("error_nick")}`),
    link: Yup.string()
      .url()
      .required(`${t("error_link")}`),
    course: Yup.string().required(`${t("error_course")}`),
    experience: Yup.string().required(`${t("error_select")}`),
    motivation: Yup.string().required(`${t("error_motivation")}`),
    resource: Yup.string()
      .oneOf(resources)
      .required(`${t("error_select")}`),
    agree: Yup.boolean().required(`${t("error_agree")}`),
    rule: Yup.boolean().required(`${t("error_agree")}`),
    speciality: Yup.array()
      .of(Yup.string())
      .min(1, `${t("error_select")}`),
  });
  return (
    <div className={styles.wrapModalForm} onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <IoClose className={styles.close} />
      </button>
      <div className={styles.modalForm}>
        <h4 className={styles.titleModal}>{t("trainee_title")}</h4>
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
                <InputUserData label={t("course")} name="course" type="text" />
                <h4 className={styles.subtitle}>
                  {t("experience")}
                  <span className={styles.red}>{" *"}</span>
                </h4>
                <div
                  role="group"
                  aria-labelledby="radio-group"
                  className={styles.wrapRow}
                >
                  <InputRadio
                    label="experience"
                    name="experience"
                    type="radio"
                    value={t("yes")}
                    multiple={false}
                    checked={false}
                  >
                    {t("yes")}
                  </InputRadio>
                  <InputRadio
                    label="experience"
                    name="experience"
                    type="radio"
                    value={t("no")}
                    multiple={false}
                    checked={false}
                  >
                    {t("no")}
                  </InputRadio>
                </div>
                <InputUserData
                  label={t("email")}
                  name="email"
                  type="email"
                  // placeholder="email@gmail.com"
                />
                <InputUserData label={t("city")} name="city" type="text" />
                <InputUserData
                  label={t("country")}
                  name="country"
                  type="text"
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
                <InputUserData
                  label={t("motivation")}
                  name="motivation"
                  type="text"
                  //   placeholder="Discord"
                />
                <h4 className={styles.subtitle}>
                  {t("resourse")}
                  <span className={styles.red}>{" *"}</span>
                </h4>
                <ul
                  className={styles.wrapColumn}
                  role="group"
                  aria-labelledby="radio-group"
                >
                  {resources.map((item, i) => (
                    <InputRadio
                      name="resource"
                      key={i}
                      value={t(item)}
                      type="radio"
                      multiple={false}
                      checked={false}
                    >
                      {t(item)}
                    </InputRadio>
                  ))}
                </ul>
              </div>
              <div className={styles.wrapAgree}>
                <InputCheckAgree name="rule" type="checkbox" checked={false}>
                  {t("rules")}
                </InputCheckAgree>
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

// <a class="fancybox" href="doc.pdf" data-fancybox-type="iframe">просмотр файла</a>
