"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Blog.module.css";
import { FaLink } from "react-icons/fa";
import NotifCopy from "../../_Helper/NotifCopy";

export default function PostId({ post }) {
  // console.log("POST", post);
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
  const date = new Date(post.date);
  // console.log(date);
  const format = date.toDateString();
  return (
    <div className={styles.wrapPost}>
      <div className={styles.wrapSub}>
        <p className={styles.itemDate}>{format}</p>
        <button onClick={handleCopyClick} className={styles.wrapLink}>
          <FaLink className={styles.iconLink} />
        </button>
        {showNotif && (
          <NotifCopy message="Copy" onClose={() => setShowNotif(false)} />
        )}
      </div>
      <p className={styles.itemText}>{post.text1}</p>
      <div className={styles.imgPost}>
        <Image alt="any picture" src={post.url} fill quality={80} />
      </div>
      <p className={styles.itemText}>{post.text2}</p>
      <div className={styles.wrapBtn}>
        <Link href="/blog" className={styles.itemBtn}>
          повернутись ...
        </Link>
      </div>
    </div>
  );
}
