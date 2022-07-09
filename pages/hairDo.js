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
        <h1 className={styles.title}>
          <iframe
            src="https://giphy.com/embed/QYdqmkvjNyHs2Xov84"
            width="480"
            height="270"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </h1>
        <Link href="/space">
          <a className="text-3xl text-white my-4">
            Hope this hair do isn&apos;t OTT..?!
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p className="text-white">Powered by Matt</p>
      </footer>
    </div>
  );
}
