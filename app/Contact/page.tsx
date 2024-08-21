import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <head>
        <meta property="og:title" content="Contact - Sydney Antoni" />
        <meta
          property="og:description"
          content="Portfolio Website for Sydney Antoni (Contact Page)"
        />
      </head>
      <main>
        <h1>Contact</h1>
        <div className={styles.phoneContainer}>
          <Image
            src={process.env.NEXT_PUBLIC_BASE_URL + "/phone.svg"}
            alt={"phone symbol"}
            width={50}
            height={50}
          />
          <p>+49 173 2004707</p>
        </div>
        <div className={styles.mailContainer}>
          <Image
            src={process.env.NEXT_PUBLIC_BASE_URL + "/mail.svg"}
            alt={"mail symbol"}
            width={50}
            height={50}
          />
          <p>sydney.antoni@outlook.de</p>
        </div>
      </main>
    </>
  );
}
