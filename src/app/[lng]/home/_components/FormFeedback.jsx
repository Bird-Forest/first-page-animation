"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import FormInputInfo from "./FormInputInfo";
import FormInputMess from "./FormInputMess";
import Spinner from "../../_Helper/Spinner";
import { useTranslation } from "@/src/app/i18n/client";
import { createReview } from "@/src/app/services/reviews";

const initialValues = {
  name: "",
  foto: "",
  link: "",
  message: "",
};

export default function FormFeedback({ lng }) {
  const [mess, setMess] = useState(" ");
  const { t } = useTranslation(lng);

  const validationSchema = Yup.object({
    name: Yup.string().required(`${t("form_error1")}`),
    foto: Yup.string().required(`${t("form_error2")}`),
    link: Yup.string().required(`${t("form_error2")}`),
    message: Yup.string().required(`${t("form_error3")}`),
  });

  return (
    <section className={styles.feedback}>
      <div className={styles.wrapForm}>
        <h3 className={styles.formTitle}>{t("form_title")}</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(true);
            //   console.log(values);

            // }, 400);
            const message = await createReview(values);
            setSubmitting(true);
            // console.log(values);
            setMess(message);
            resetForm();
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
                label={t("form_foto")}
                name="foto"
                type="url"
                placeholder="https://media.licdn.com/dms/image/..."
              />
              <FormInputInfo
                label={t("form_link")}
                name="link"
                type="url"
                placeholder="https://www.linkedin.com/..."
              />
              <FormInputMess
                label={t("form_mess")}
                name="message"
                type="text"
                maxlength="300"
                placeholder="maximum 300 characters"
              />
              <div className={styles.wrapBtn}>
                <button type="submit" className={styles.formBtn}>
                  {props.isSubmitting ? <Spinner /> : `${t("form_btn")}`}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className={styles.dataMess}>{mess.message}</p>
      </div>
    </section>
  );
}
