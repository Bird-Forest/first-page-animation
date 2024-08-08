"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Modal.module.css";
import InputUserData from "./forma/InputUserData";
import InputCheckAgree from "./forma/InputCheckAgree";
import Spinner from "../_Helper/Spinner";
import InputRadio from "./forma/InputRadio";
import { useTranslation } from "@/src/app/i18n/client";
import { specialties } from "../../constant/constant";
import { IoClose } from "react-icons/io5";

const resources = ["sourse1", "sourse2", "sourse3", "sourse4", "sourse5"];

const initialValues = {
  first: "",
  last: "",
  email: "",
  city: "",
  country: "",
  nick: "",
  link: "",
  resource: "",
  rule: "",
  agree: "",
  speciality: "",
  foto: "",
};

export default function ModalTrainee({ item, lng, formAction, closeModal }) {
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
    foto: Yup.string()
      .trim()
      .required(`${t("error_foto")}`),
    city: Yup.string().required(`${t("error_city")}`),
    country: Yup.string().required(`${t("error_country")}`),
    nick: Yup.string().required(`${t("error_nick")}`),
    link: Yup.string()
      .url()
      .trim()
      .required(`${t("error_link")}`),
    resource: Yup.string().required(`${t("error_select")}`),
    agree: Yup.boolean().required(`${t("error_agree")}`),
    rule: Yup.boolean().required(`${t("error_agree")}`),
    speciality: Yup.string().required(`${t("error_select")}`),
  });

  return (
    <div className={styles.wrapModalForm} onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <IoClose className={styles.close} />
      </button>
      <h4 className={styles.titleModal}>{t("trainee_title")}</h4>
      <div className={styles.modalForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const message = await formAction(values);
            setSubmitting(true);
            // console.log(values);
            setMess(message);
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
                  value={!item ? null : item.first}
                />
                <InputUserData
                  label={t("last")}
                  name="last"
                  type="text"
                  value={!item ? null : item.last}
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
                  value={!item ? null : item.email}
                />
                <InputUserData
                  label={t("city")}
                  name="city"
                  type="text"
                  value={!item ? null : item.city}
                />
                <InputUserData
                  label={t("country")}
                  name="country"
                  type="text"
                  value={!item ? null : item.country}
                />
                <InputUserData
                  label={t("discord")}
                  name="nick"
                  type="text"
                  value={!item ? null : item.nick}
                />
                <InputUserData
                  label={t("linkedin")}
                  name="link"
                  type="url"
                  value={!item ? null : item.link}
                />
                <InputUserData
                  label={t("foto")}
                  name="foto"
                  type="url"
                  value={!item ? null : item.link}
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
                  {resources.map((el, i) => (
                    <InputRadio
                      name="resource"
                      key={i}
                      type="radio"
                      value={t(el)}
                      multiple={false}
                      checked={false}
                    >
                      {t(el)}
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
        <p className={styles.formMess}>{mess.message}</p>
      </div>
    </div>
  );
}

// <a class="fancybox" href="doc.pdf" data-fancybox-type="iframe">просмотр файла</a>
