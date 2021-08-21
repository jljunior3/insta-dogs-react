import React from "react";
import styles from "./FeedPhotosItem.module.css";

export const FeedPhotosItem = ({ photo }) => {
  console.log(photo);
  return (
    <li class={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};
