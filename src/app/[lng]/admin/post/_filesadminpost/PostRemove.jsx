// "use client";

// import React, { useState } from "react";
// import styles from "./Post.module.css";
// import PostPreview from "./PostPreview";
// import { deletePost } from "@/src/app/services/posts";
// import Link from "next/link";

// export default function PostRemove({ lng, item }) {
//   const [mess, setMess] = useState("");
//   const id = item._id;

//   return (
//     <div className={styles.wrapAdmPost}>
//       <PostPreview item={item} />
//       <div className={styles.wrapBtnForm}>
//         <form
//           action={async () => {
//             const message = await deletePost(id);

//             setMess(message.message);
//           }}
//         >
//           <button type="submit" className={styles.btnForm}>
//             Видалити
//           </button>
//         </form>
//         <div className={styles.wrapMessage}>
//           <p className={styles.textMess}>{mess}</p>
//           <Link href={`/${lng}/admin/post`} className={styles.textMess}>
//             Перейти до списку постів
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
