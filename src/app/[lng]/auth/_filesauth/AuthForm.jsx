import styles from "./Auth.module.css";
import { loginAdmin } from "@/src/app/services/users";
import AuthBtn from "./AuthBtn";

// *** Функція запиту адміна - серверний варіант

export default function AuthForm() {
  return (
    <form action={loginAdmin} className={styles.wrapSignin}>
      <label className={styles.labelField}>
        Name
        <input name="name" type="name" required className={styles.inputField} />
      </label>
      <label className={styles.labelField}>
        Password
        <input
          name="password"
          type="password"
          required
          className={styles.inputField}
        />
      </label>
      <AuthBtn />
    </form>
  );
}
