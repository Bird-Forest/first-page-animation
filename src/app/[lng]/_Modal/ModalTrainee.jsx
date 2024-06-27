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

const resources = [
  "сайт Baza Trainee Ukraine",
  "сторінка Baza Educat в Instagram",
  "сторінка Baza Educat в Facebook",
  "канал Baza Go в Telegram",
  "пост на LinkedIn",
];

const initialValues = {
  name: "",
  surname: "",
  email: "",
  city: "",
  country: "",
  // tel: "",
  nick: "",
  link: "",
  course: "",
  experience: "",
  motivation: "",
  resource: [],
  rule: "",
  agree: "",
  speciality: [],
};

// https://www.linkedin.com/in/maria-barvinok/

const validationSchema = Yup.object({
  name: Yup.string().required("Вкажіть своє ім’я"),
  surname: Yup.string().required("Вкажіть своє прізвище"),
  email: Yup.string().email("відсутній @").required("Вкажіть електронну пошту"),
  city: Yup.string().required("Вкажіть місто"),
  country: Yup.string().required("Вкажіть країну"),
  // tel: Yup.string()
  //   .matches(regexp, "10 цифр, починаючи з 0")
  //   .required("Введіть номер телефону"),
  nick: Yup.string().required("Вкажіть нік в Discord"),
  link: Yup.string().url().required("Вкажіть профіль в Linkedin"),
  course: Yup.string().required("Вкажіть назву курсу"),
  experience: Yup.string()
    .oneOf(["так", "ні"])
    .required("Оберіть наявність досвіду"),
  motivation: Yup.string().required("Вкажіть вашу мотивацію"),
  resource: Yup.string().oneOf(resources).required("Вкажіть ресурс"),
  agree: Yup.boolean().required("Надайте згоду"),
  rule: Yup.boolean().required("Ознайомтесь з умовами участі"),
  speciality: Yup.array().of(Yup.string()).min(1, "Оберіть спецілізацію"),
  //   time: Yup.array().of(Yup.string()).min(1, "Оберіть зручний час"),
});

export default function ModalTrainee({ closeModal }) {
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
          Реєстрація на участь <br />в проєкті Baza Trainee Ukraine
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
                <h4 className={styles.subtitle}>
                  Спеціалізація<span className={styles.red}>{" *"}</span>
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
                  label="Дата закінчення курсу, якщо курс триває, зазначити - поточний"
                  name="course"
                  type="text"
                />
                <h4 className={styles.subtitle}>
                  Наявність досвіду<span className={styles.red}>{" *"}</span>
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
                    value="Так"
                    checked={false}
                  >
                    Tak
                  </InputRadio>
                  <InputRadio
                    label="experience"
                    name="experience"
                    type="radio"
                    value="Ні"
                    checked={false}
                  >
                    Ні
                  </InputRadio>
                </div>
                <InputUserData
                  label="Електронна пошта"
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                />
                <InputUserData label="Місто" name="city" type="text" />
                <InputUserData label="Країна" name="country" type="text" />
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

                <InputUserData
                  label="Ваша мотивація створення продукту"
                  name="motivation"
                  type="text"
                  //   placeholder="Discord"
                />
                <h4 className={styles.subtitle}>
                  Джерело отримання анкети
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
                      value={item}
                      type="radio"
                      multiple={false}
                      checked={false}
                    >
                      {item}
                    </InputRadio>
                  ))}
                </ul>
              </div>

              <div className={styles.wrapAgree}>
                <InputCheckAgree name="rule" type="checkbox" checked={false}>
                  Ознайомлений/ознайомлена з умовами участі в проєкті
                </InputCheckAgree>
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
                  {props.isSubmitting ? <Spinner /> : " Відправити"}
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
