import styles from "./Hero.module.css";
export const Hero = () => {
  console.log("🚧", styles);
  return (
    <section className={styles.hero}>
      <p>Hero</p>
    </section>
  );
};
