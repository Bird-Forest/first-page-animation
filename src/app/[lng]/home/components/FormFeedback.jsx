"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import FormInputInfo from "./FormInputInfo";
import FormInputMess from "./FormInputMess";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Введіть своє ім’я"),
  email: Yup.string().email("відсутній @").required("Введіть електронну пошту"),
  message: Yup.string().required("Введіть своє повідомлення"),
});

export default function FormFeedback() {
  return (
    <section className={styles.feedback}>
      <div className={styles.wrapForm}>
        <h3 className={styles.formTitle}>Форма зворотного зв’язку</h3>
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
                label="Ім’я"
                name="name"
                type="text"
                placeholder="Iм’я"
              />
              <FormInputInfo
                label="Електронна пошта"
                name="email"
                type="email"
                placeholder="email@gmail.com"
              />
              <FormInputMess label="Повідомлення" name="message" type="text" />
              <div className={styles.wrapBtn}>
                <button type="submit" className={styles.formBtn}>
                  {props.isSubmitting ? "loading..." : " Відправити"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

//  <form className={styles.form} onSubmit={handleForm}>
//    <label className={styles.label}>
//      <p>
//        Ім`я<span className={styles.red}>{" *"}</span>
//      </p>

//      <input
//        type="name"
//        name="name"
//        placeholder="Ім'я"
//        required
//        className={styles.info}
//      />
//    </label>
//    <label className={styles.label}>
//      <p>
//        Електронна пошта<span className={styles.red}>{" *"}</span>
//      </p>

//      <input
//        type="email"
//        name="email"
//        placeholder="email@gmail.com"
//        required
//        className={styles.info}
//      />
//    </label>

//    <label className={styles.label}>
//      <p>
//        Повідомлення<span className={styles.red}>{" *"}</span>
//      </p>
//      <input type="text" name="message" required className={styles.message} />
//    </label>
//    <div className={styles.wrapBtn}>
//      <button type="submit" className={styles.formBtn}>
//        Відправити
//      </button>
//    </div>
//  </form>;
