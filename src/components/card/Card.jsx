import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2023-09-18 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">Read More</Link>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          perspiciatis nemo fugit repudiandae quis doloribus cum, molestias
          ratione, sapiente culpa autem ex possimus distinctio eaque nesciunt
          aut ipsam odit alias.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
