"use client";

import styles from "./Form.module.css";

export default function Form() {
  const handleForm = () => {
    console.log("form");
  };

  return (
    <form className={styles.form} onSubmit={handleForm}>
      <label className={styles.label}>
        <p>
          Ім`я<span className={styles.red}>{" *"}</span>
        </p>

        <input
          type="name"
          name="name"
          placeholder="Ім'я"
          required
          className={styles.info}
        />
      </label>
      <label className={styles.label}>
        <p>
          Електронна пошта<span className={styles.red}>{" *"}</span>
        </p>

        <input
          type="email"
          name="email"
          placeholder="email@gmail.com"
          required
          className={styles.info}
        />
      </label>

      <label className={styles.label}>
        <p>
          Повідомлення<span className={styles.red}>{" *"}</span>
        </p>
        <input type="text" name="message" required className={styles.message} />
      </label>
      <div className={styles.wrapBtn}>
        <button type="submit" className={styles.formBtn}>
          Відправити
        </button>
      </div>
    </form>
  );
}
