import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
        <meta property="og:title" content="Projects - Sydney Antoni" />
        <meta
          property="og:description"
          content="Portfolio Website for Sydney Antoni (Projects Page)"
        />
      </head>
      <main className={styles.main}>
        <h1>Projects</h1>
        <div className={styles.projectsContainer}>
          <div>
            <p>
              Body text for your whole bio. We’ll put in some lorem ipsum to
              show how a filled-out page might look:
            </p>
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
              src={process.env.NEXT_PUBLIC_BASE_URL + "/xapling-logo.svg"}
              alt={"Logo"}
              width={200}
              height={50}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + "/logo.svg"}
              alt={"Logo"}
              width={180}
              height={50}
              className={styles.image}
            />
          </div>
          <div>
            <p>
              Body text for your whole bio. We’ll put in some lorem ipsum to
              show how a filled-out page might look:
            </p>
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
        </div>
        <div className={styles.projectsContainer}>
          <div>
            <p>
              Body text for your whole bio. We’ll put in some lorem ipsum to
              show how a filled-out page might look:
            </p>
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
              src={process.env.NEXT_PUBLIC_BASE_URL + "/pia-logo.svg"}
              alt={"Logo"}
              width={200}
              height={50}
              className={styles.image}
            />
          </div>
        </div>
      </main>
    </>
  );
}
