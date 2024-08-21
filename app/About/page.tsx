import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <head>
        <meta property="og:title" content="About - Sydney Antoni" />
        <meta
          property="og:description"
          content="Portfolio Website for Sydney Antoni (About Page)"
        />
      </head>
      <main>
        <h1>About</h1>
        <div className={styles.imageTextContainer}>
          <div>
            <h2 className={styles.subheading}>Subheading:</h2>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully
              curated Ginza conversation exquisite perfect nostrud nisi
              intricate Content. Qui international first-class nulla ut.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive izakaya charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquip, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur. Excepteur efficient emerging, minim veniam anim aute
              carefully curated Ginza conversation exquisite perfect nostrud
              nisi intricate Content. Qui international first-class nulla ut.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive izakaya charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquip, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + "/portrait.png"}
              alt={"Portrait"}
              width={400}
              height={450}
            />
          </div>
        </div>
      </main>
    </>
  );
}
