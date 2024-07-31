"use client";

import React, { useState } from "react";
import Loading from "../../../_Helper/Loading";
import { v4 as uuidv4 } from "uuid";
import styles from "./ProjectAdm.module.css";
import ProjectString from "./ProjectString";
import { useFormStatus } from "react-dom";

export default function ProjectList({ projects, lng }) {
  const [items, setItems] = useState(projects);
  const [word, setWord] = useState("");
  const [sortDate, setSortDate] = useState(false);
  const { pending } = useFormStatus();
  return (
    <div className={styles.wrapFilterList}>
      <div className={styles.filter}>FILTER</div>
      <ul className={styles.wrapList}>
        {pending ? (
          <Loading />
        ) : (
          items.map((item) => (
            <ProjectString key={uuidv4()} item={item} lng={lng} />
          ))
        )}
      </ul>
    </div>
  );
}
