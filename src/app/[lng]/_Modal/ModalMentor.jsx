"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";
import InputCheckbox from "./forma/InputCheckbox";
import InputUserData from "./forma/InputUserData";
import InputCheckAgree from "./forma/InputCheckAgree";

const specialties = [
  "UI/UX designer",
  "Backend",
  "Frontend",
  "Fullstack engineer",
  "QA Manual engineer",
  "Project Manager",
];

const works = ["12.00-15.00", "15.00-18.00", "18.00-21.00", "будь-який"];

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

const validationSchema = Yup.object({
  name: Yup.string().required("Введіть своє ім’я"),
  surname: Yup.string().required("Введіть своє прізвище"),
  email: Yup.string().email("відсутній @").required("Введіть електронну пошту"),
  tel: Yup.string()
    .matches(regexp, "10 цифр, починаючи з 0")
    .required("Введіть номер телефону"),
  nick: Yup.string().required("Введіть нік в Discord"),
  link: Yup.string().url().required("Введіть профіль в Linkedin"),
  agree: Yup.boolean().required("Надайте згоду"),
  speciality: Yup.array().of(Yup.string()).min(1, "Оберіть спеціалізацію"),
  time: Yup.array().of(Yup.string()).min(1, "Оберіть зручний час"),
});

export default function ModalMentor({ closeModal }) {
  return (
    <div
      className={styles.wrapModalMentor}
      onClick={(e) => e.stopPropagation()}
    >
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <IoClose className={styles.close} />
      </button>
      <div className={styles.modalMentor}>
        <h4 className={styles.titleModal}>
          Реєстрація ментора <br /> на Baza Trainee Ukraine
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
            <Form className={styles.mentorForm} autoComplete="off">
              <div className={styles.wrapData}>
                <InputUserData
                  label="Ім’я"
                  name="name"
                  type="text"
                  placeholder="Iм’я"
                />
                <InputUserData
                  label="Прізвище"
                  name="surname"
                  type="text"
                  placeholder="Прізвище"
                />
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
                  label="Електронна пошта"
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                />
                <InputUserData
                  label="Телефон"
                  name="tel"
                  type="tel"
                  placeholder="+38 XXX XXX XX XX"
                />
                <InputUserData
                  label="Нік в Discord"
                  name="nick"
                  type="text"
                  placeholder="Discord"
                />
                <InputUserData
                  label=" Профіль в Linkedin"
                  name="link"
                  type="url"
                  placeholder="Лінк на профіль"
                />
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
                      {item}
                    </InputCheckbox>
                  ))}
                </ul>
              </div>
              <div className={styles.wrapAgree}>
                <InputCheckAgree name="agree" type="checkbox" checked={false}>
                  Надаю згоду на обробку персональних даних
                </InputCheckAgree>
              </div>
              <div className={styles.wrapBtnForm}>
                <button
                  type="submit"
                  className={`${styles.btnPay} ${styles.active}`}
                >
                  {props.isSubmitting ? "loading..." : " Відправити"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
