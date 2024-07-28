"use client";

import React, { useState } from "react";
import PostItem from "./PostItem";
import { v4 as uuidv4 } from "uuid";
import styles from "./Blog.module.css";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import EmptyPage from "../../_Helper/EmptyPage";

export default function Posts({ posts, lng }) {
  const [selected, setSelected] = useState(posts);
  const [word, setWord] = useState("");

  const onSearch = () => {
    let arr = [];
    posts.map((post) => {
      const title = post.title.toLowerCase().includes(word.toLowerCase());
      const text1 = post.text1.toLowerCase().includes(word.toLowerCase());
      const text2 = post.text2.toLowerCase().includes(word.toLowerCase());
      if (title || text1 || text2 === true) {
        arr.push(post);
      }
    });
    setSelected(arr);
  };
  const onClear = () => {
    setSelected(posts);
    setWord(" ");
  };

  const Arr = Array.isArray(selected) && selected.length > 0;
  return (
    <div className={styles.wrapPosts}>
      <div className={styles.wrapFilter}>
        <button on onClick={onClear} className={styles.btnFilter}>
          <FaCircleXmark className={styles.iconBtn} />
        </button>
        <input
          type="text"
          className={styles.inpFilter}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="button" onClick={onSearch} className={styles.btnFilter}>
          <FaCircleCheck className={styles.iconBtn} />
        </button>
      </div>
      {Arr ? (
        <ul className={styles.wrapList}>
          {selected.map((item) => (
            <PostItem key={uuidv4()} item={item} lng={lng} />
          ))}
        </ul>
      ) : (
        <EmptyPage />
      )}
    </div>
  );
}
