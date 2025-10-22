'use client';

import styles from './angry-bird.module.css';

export default function AngryBird(){
  return (
    <main className={styles.container}>
      <section className={styles.red_bird}>
        <section className={styles.shadow}></section>
        <section className={styles.body}>
          <div className={styles.crown}></div>
          <div className={styles.left_eyebrow}></div>
          <div className={styles.left_eye}></div>
          <div className={styles.right_eyebrow}></div>
          <div className={styles.right_eye}></div>
          <div className={styles.beak}></div>
        </section>
      <section className={styles.belly}></section>
    </section>
  </main>
  )
}