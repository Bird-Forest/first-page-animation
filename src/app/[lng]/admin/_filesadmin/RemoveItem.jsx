"use client";

import React from "react";
import styles from "./Admin.module.css";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { deletePost } from "@/src/app/services/posts";

export default function RemoveItem({ closeModal, lng, id, page }) {
  console.log("Modalka", id, page);
  return (
    <div className={styles.delWrap}>
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <IoClose className={styles.close} />
      </button>
      <h4 className={styles.delText}>Ви дійсно бажаєте видалити елемент?</h4>
      <div className={styles.delWrapBtn}>
        <Link href={`/${lng}/admin/${page}/list`} className={styles.delBtn}>
          Ні
        </Link>
        {/* <button className={styles.delBtn}>Так</button> */}
        <form
          action={async () => {
            // "use server";
            await deletePost(id);
            // revalidatePath(`/${lng}/admin/post/list`, "page");
            redirect(`/${lng}/admin/${page}/list`);
          }}
        >
          <button type="submit" className={styles.delBtn}>
            Так
          </button>
        </form>
      </div>
    </div>
  );
}
