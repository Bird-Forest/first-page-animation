"use client";

import React, { useState } from "react";
import PostString from "./PostString";
import { v4 as uuidv4 } from "uuid";
import styles from "./Post.module.css";
import { useFormStatus } from "react-dom";
import {
  BsSortNumericDown,
  BsSortNumericUpAlt,
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsZoomIn,
  BsZoomOut,
} from "react-icons/bs";
import {
  getPostSortBy19,
  getPostSortBy91,
  getPostSortByAZ,
  getPostSortByZA,
} from "@/src/app/services/posts";
import Loading from "../../../_Helper/Loading";

export default function PostList({ posts, lng }) {
  const [items, setItems] = useState(posts);
  const [word, setWord] = useState("");
  const [sortDate, setSortDate] = useState(false);
  const { pending } = useFormStatus();

  const onSearch = () => {
    let arr = [];
    items.map((post) => {
      const title = post.title.toLowerCase().includes(word.toLowerCase());
      const text1 = post.text1.toLowerCase().includes(word.toLowerCase());
      const text2 = post.text2.toLowerCase().includes(word.toLowerCase());
      if (title || text1 || text2 === true) {
        arr.push(post);
      }
    });
    setItems(arr);
  };
  const onClear = () => {
    setItems(posts);
    setWord(" ");
  };

  return (
    <div className={styles.wrapFilterList}>
      <div className={styles.filter}>
        <button type="button" onClick={onClear} className={styles.filterBtn}>
          <BsZoomOut className={styles.iconSearch} />
        </button>
        <input
          autoFocus
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="пошук ..."
          className={styles.inputSearch}
        />
        <button type="button" onClick={onSearch} className={styles.filterBtn}>
          <BsZoomIn className={styles.iconSearch} />
        </button>
        <button
          type="button"
          onClick={async () => {
            const sort19 = await getPostSortBy19();
            setItems(sort19);
          }}
          className={styles.filterBtn}
        >
          <BsSortNumericDown className={styles.iconBtn} />
        </button>

        <button
          type="button"
          onClick={async () => {
            const sort91 = await getPostSortBy91();
            setItems(sort91);
          }}
          className={styles.filterBtn}
        >
          <BsSortNumericUpAlt className={styles.iconBtn} />
        </button>

        <button
          type="button"
          onClick={async () => {
            const sortAZ = await getPostSortByAZ();
            setItems(sortAZ);
          }}
          className={styles.filterBtn}
        >
          <BsSortAlphaDown className={styles.iconBtn} />
        </button>
        <button
          type="button"
          onClick={async () => {
            const sortZA = await getPostSortByZA();
            setItems(sortZA);
          }}
          className={styles.filterBtn}
        >
          <BsSortAlphaUpAlt className={styles.iconBtn} />
        </button>
      </div>
      <ul className={styles.wrapList}>
        {pending ? (
          <Loading />
        ) : (
          items.map((item) => (
            <PostString key={uuidv4()} item={item} lng={lng} />
          ))
        )}
      </ul>
    </div>
  );
}
