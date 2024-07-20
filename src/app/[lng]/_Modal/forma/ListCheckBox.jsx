// "use client";

// import React from "react";
// import { useField } from "formik";
// import styles from "../Modal.module.css";

// export default function ListCheckBox({ children, ...props }) {
//   const [field, meta] = useField({ ...props, type: "checkbox" });
//   // const errorClass = meta.touched && meta.error ? "error" : "";
//   const state = field.checked;
//   console.log(state);
//   return (
//     <ul
//       role="group"
//       aria-labelledby="checkbox-group"
//       className={styles.wrapCheck}
//     >
//       {props.arr.map((item, i) => (
//         <li key={i} className={styles.wrapItem}>
//           <div className={styles.checkItem}>
//             <input
//               value={item}
//               type="checkbox"
//               multiple={true}
//               checked={false}
//               className={
//                 !state
//                   ? styles.checkBox + " " + styles.stateTrue
//                   : styles.checkBox + " " + styles.stateFalse
//               }
//               name={props.id || props.name}
//               {...field}
//               {...props}
//             />
//             <label
//               htmlFor={props.id || props.name}
//               className={styles.checkText}
//             >
//               {item}
//             </label>
//           </div>
//         </li>
//       ))}
//       {meta.touched && meta.error ? (
//         <p className={styles.errorMess}>{meta.error}</p>
//       ) : null}
//     </ul>
//   );
// }
