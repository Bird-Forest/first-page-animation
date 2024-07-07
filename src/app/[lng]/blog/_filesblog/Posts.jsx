import React from "react";
import PostItem from "./PostItem";
import { v4 as uuidv4 } from "uuid";
import styles from "./Blog.module.css";
import { posts } from "./data";

export default function Posts() {
  return (
    <ul className={styles.wrapList}>
      {posts.map((item) => (
        <PostItem key={uuidv4()} item={item} />
      ))}
    </ul>
  );
}
