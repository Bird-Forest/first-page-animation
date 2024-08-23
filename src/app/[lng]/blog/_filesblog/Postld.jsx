"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Blog.module.css";
import { FaLink } from "react-icons/fa";
import NotifMess from "../../_Helper/NotifMess";

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

  const date = post.date.slice(0, 10);
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
      <p className={styles.textID}>{post.text1}</p>
      <div className={styles.imgPost}>
        <Image alt="any picture" src={post.url} fill quality={80} />
      </div>
      <p className={styles.textID}>{post.text2}</p>
      <div className={styles.wrapBtn}>
        <Link href={`/${lng}/blog`} className={styles.itemBtn}>
          повернутись ...
        </Link>
      </div>
    </div>
  );
}
