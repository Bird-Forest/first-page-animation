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

const resources = [
  "На сайті Baza Trainee Ukraine",
  "На сторінці Baza Educat в Instagram",
  "На сторінці Baza Educat в Facebook",
  "в каналі Baza Go в Telegram",
  "в пості на LinkedIn",
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
  name: Yup.string().required("Введіть своє ім’я"),
  surname: Yup.string().required("Введіть своє прізвище"),
  email: Yup.string().email("відсутній @").required("Введіть електронну пошту"),
  city: Yup.string().required("Введіть місто"),
  country: Yup.string().required("Введіть країну"),
  // tel: Yup.string()
  //   .matches(regexp, "10 цифр, починаючи з 0")
  //   .required("Введіть номер телефону"),
  nick: Yup.string().required("Введіть нік в Discord"),
  link: Yup.string().url().required("Введіть профіль в Linkedin"),
  course: Yup.string().required("Введіть назву курсу"),
  experience: Yup.boolean().required("Оберіть наявність досвіду"),
  motivation: Yup.string().required("Вкажіть вашу мотивацію"),
  resource: Yup.array()
    .of(Yup.string())
    .min(1, "Оберіть де побачив/побачила анкету"),
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
                <InputUserData label="Місто" name="city" type="text" />
                <InputUserData label="Країна" name="country" type="text" />
                {/* <InputUserData
                  label="Телефон"
                  name="tel"
                  type="tel"
                  placeholder="+38 XXX XXX XX XX"
                /> */}
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
                  label="Назва пройденого курсу по спеціальності і термін закінчення (якщо курс іде зараз, зазначте, що поточний)"
                  name="course"
                  type="text"
                />
                <InputCheckAgree
                  label="Наявність досвіду*"
                  name="experience"
                  type="checkbox"
                  checked={false}
                />
                <InputUserData
                  label="В чому мотивація створити продукт?"
                  name="motivation"
                  type="text"
                  //   placeholder="Discord"
                />
                <h4>Я побачив/побачила анкету: *</h4>
                <ul
                  className={styles.wrapCheck}
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  {resources.map((item, i) => (
                    <InputCheckbox
                      name="resource"
                      key={i}
                      value={item}
                      type="checkbox"
                      //   multiple={true}
                      checked={false}
                    >
                      {item}
                    </InputCheckbox>
                  ))}
                </ul>
              </div>
              <h4>Ознайомлений/ознайомлена з умовами участі в проєкті *</h4>
              <div className={styles.wrapAgree}>
                <InputCheckAgree name="rule" type="checkbox" checked={false}>
                  Погоджуюсь
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
