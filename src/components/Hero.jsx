import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Dibyanshu</h1>
        <p className={styles.description}>
          I am an aspiring fullstack developer
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:www.dibyanshukiro007@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
