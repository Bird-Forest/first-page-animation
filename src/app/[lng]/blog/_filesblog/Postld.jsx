"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Blog.module.css";
import { FaLink } from "react-icons/fa";
import NotifMess from "../../_Helper/NotifMess";
import { format } from "date-fns";

export default function PostId({ post, lng }) {
  const [copied, setCopied] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const handleCopyClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    if (copied === true) {
      setShowNotif(true);
    }
  };

  const date = format(new Date(post.date), "yyyy-MM-dd");
  return (
    <div className={styles.wrapPost}>
      <div className={styles.wrapSub}>
        <p className={styles.itemDate}>{date}</p>
        <button onClick={handleCopyClick} className={styles.wrapLink}>
          <FaLink className={styles.iconLink} />
        </button>
        {showNotif && (
          <NotifMess
            message="Успішно скопійовано"
            onClose={() => setShowNotif(false)}
          />
        )}
      </div>
      <p className={styles.itemText}>{post.text1}</p>
      <div className={styles.imgPost}>
        <Image alt="any picture" src={post.url} fill quality={80} />
      </div>
      <p className={styles.itemText}>{post.text2}</p>
      <div className={styles.wrapBtn}>
        <Link href={`/${lng}/blog`} className={styles.itemBtn}>
          повернутись ...
        </Link>
      </div>
    </div>
  );
}
