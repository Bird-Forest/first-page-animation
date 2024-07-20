// "use client";

// import React from "react";
// import { signIn } from "next-auth/react";
// import { useSearchParams } from "next/navigation";
// import styles from "./Auth.module.css";
// import { FcGoogle } from "react-icons/fc";

// export default function GooglButton({ lng }) {
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || `/${lng}/admin`;
//   console.log("Googl", callbackUrl);
//   return (
//     <div className={styles.wrapGoogle}>
//       <FcGoogle className={styles.iconGoogl} />
//       <button
//         onClick={() => signIn("google", { callbackUrl })}
//         className={styles.btnGoogl}
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

// ** For server component
// <form
//   className={styles.wrapGoogle}
//   action={async () => {
//     "use server";
//     await signIn("google", { redirectTo: `/${lng}/admin` });
//   }}
// >
//   <FcGoogle className={styles.iconGoogl} />
//   <button type="submit" className={styles.btnGoogl}>
//     Signin with Google
//   </button>
// </form>
