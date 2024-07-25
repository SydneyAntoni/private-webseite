import styles from './page.module.css'
import Card from "@/app/components/Card/Card";
import Node from "@/app/components/Node/Node";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <section className={styles.banner}>
          <h2>Hey I’m <span className={styles.linearGradient}>Sydney Antoni</span></h2>
          <h3 className={styles.subTitle}>a Software Developer</h3>
        </section>
        <section className={styles.projects}>
            <Card
                title={'My very own Website'}
                subTitle={'Buiding my website on my own'}
                srcPicture={process.env.NEXT_PUBLIC_BASE_URL + '/logo.svg'}
                altPicture={'Logo'}
                width={180}
                height={220}
            />
            <Card
                title={'xapling Website'}
                subTitle={'Working in the Frontend'}
                srcPicture={process.env.NEXT_PUBLIC_BASE_URL + '/xapling-logo.svg'}
                altPicture={'Logo'}
                width={200}
                height={244.5}
            />
            <Card
                title={'PIA'}
                subTitle={'Working in the Backend'}
                srcPicture={process.env.NEXT_PUBLIC_BASE_URL + '/pia-logo.svg'}
                altPicture={'Logo'}
                width={200}
                height={200}
            />
        </section>
        <section className={styles.historyContainer}>
            <Node date={"01.01.2021"} className={styles.historyContainer}>Bla bla bla </Node>
            <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + '/history-lines/firstLine.svg'}
                alt={'first line'}
                width={200}
                height={200}
            />
            <Node date={"01.01.2021"}>Bla bla bla </Node>
            <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + '/history-lines/secondLine.svg'}
                alt={'second line'}
                width={200}
                height={200}
            />
        </section>
      </main>
  );
}
