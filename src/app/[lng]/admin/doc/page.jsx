import React from "react";
import styles from "../_filesadmin/Admin.module.css";
import EmptyPage from "../../_Helper/EmptyPage";
import { FaHouseUser } from "react-icons/fa6";
import Link from "next/link";

export default function ListOfDocPage({ params: { lng } }) {
  return (
    <div className={styles.admin}>
      <EmptyPage />
      <Link href={`/${lng}/admin`} className={styles.wrapIconEmpty}>
        <FaHouseUser className={styles.iconEmpty} />
      </Link>
    </div>
  );
}
