"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import FormInputInfo from "./FormInputInfo";
import FormInputMess from "./FormInputMess";
import Spinner from "../../_Helper/Spinner";
import { useTranslation } from "@/app/i18n/client";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function FormFeedback({ lng }) {
  const { t } = useTranslation(lng);

  const validationSchema = Yup.object({
    name: Yup.string().required(`${t("form_error1")}`),
    email: Yup.string()
      .email("відсутній @")
      .required(`${t("form_error2")}`),
    message: Yup.string().required(`${t("form_error3")}`),
  });

  return (
    <section className={styles.feedback}>
      <div className={styles.wrapForm}>
        <h3 className={styles.formTitle}>{t("form_title")}</h3>
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
            <Form className={styles.form} autoComplete="on">
              <FormInputInfo
                label={t("form_name")}
                name="name"
                type="text"
                placeholder={t("form_name")}
              />
              <FormInputInfo
                label={t("form_email")}
                name="email"
                type="email"
                placeholder="email@gmail.com"
              />
              <FormInputMess
                label={t("form_mess")}
                name="message"
                type="text"
              />
              <div className={styles.wrapBtn}>
                <button type="submit" className={styles.formBtn}>
                  {props.isSubmitting ? <Spinner /> : `${t("form_btn")}`}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
