import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Image from "next/image";
import Link from "@/app/components/Link/Link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Sydney Antoni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio - Sydney Antoni</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={process.env.NEXT_PUBLIC_BASE_URL + "/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={process.env.NEXT_PUBLIC_BASE_URL + "/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={process.env.NEXT_PUBLIC_BASE_URL + "/favicon-16x16.png"}
        />
        <link
          rel="manifest"
          href={process.env.NEXT_PUBLIC_BASE_URL + "/site.webmanifest"}
        />
        <link
          rel="mask-icon"
          href={process.env.NEXT_PUBLIC_BASE_URL + "/safari-pinned-tab.svg"}
          color="#2b8eab"
        />
        <link
          rel="shortcut icon"
          href={process.env.NEXT_PUBLIC_BASE_URL + "/favicon.ico"}
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta
          name="msapplication-config"
          content={process.env.NEXT_PUBLIC_BASE_URL + "/browserconfig.xml"}
        />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_BASE_URL + "/portrait.png"}
        />
        <meta property="og:image:alt" content="A Portrait of Sydney Antoni" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <header>
          <div className={styles.containerBalken}>
            <div className={styles.magentaBalken}></div>
            <div className={styles.orangeBalken}></div>
          </div>
          <div className={styles.containerLogoNav}>
            <button className={styles.buttonLogo}>
              <a href={"/"} className={styles.buttonLogoLink}>
                <Image
                  src={process.env.NEXT_PUBLIC_BASE_URL + "/logo.svg"}
                  alt="logo"
                  width="50"
                  height="50"
                />
              </a>
            </button>
            <nav>
              <ul className={styles.containerNav}>
                <li className={styles.itemNav}>
                  <Link link={"/"}>Home</Link>
                </li>
                <li className={styles.itemNav}>
                  <Link link={"/Projects"}>Projects</Link>
                </li>
                <li className={styles.itemNav}>
                  <Link link={"/About"}>About</Link>
                </li>
                <li className={styles.itemNav}>
                  <Link link={"/Contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
        <footer style={{ margin: 0 }}>
          <ul className={styles.listFooter}>
            <li className={styles.listElements}>
              <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + "/gitHub.svg"}
                alt={"GitHub Logo"}
                width={28}
                height={28}
              />
            </li>
            <li className={styles.listElements}>
              <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + "/linkedIn.svg"}
                alt={"LinkedIn Logo"}
                width={28}
                height={28}
              />
            </li>
            <li className={styles.listElements}>Impressum</li>
            <li className={styles.listElements}>Datenschutz</li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
