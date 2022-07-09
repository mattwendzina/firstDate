import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Date</title>
      </Head>

      <main className={styles.main}>
        <iframe
          src="https://giphy.com/embed/11RgbBSgomKx6o"
          width="480"
          height="288"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <Link href="/letsGo">
          <a className="text-3xl text-white my-4">
            Bit of a pre-stretch too... and we&apos;re ready!
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p className="text-white">Powered by Matt</p>
      </footer>
    </div>
  );
}
