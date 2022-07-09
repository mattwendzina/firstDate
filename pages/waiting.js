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
          src="https://giphy.com/embed/kTEqpBl5W9X2w"
          width="480"
          height="357"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <h2 className="text-3xl text-white my-4">
          Don&apos;t leave hanging. Coffee for one is less fun. WhatsApp to
          RSVP!
        </h2>

        <Link href="/">
          <a className="text-3xl text-amber-400 my-4 font-bold">
            Watch again...?
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p className="text-white">Powered by Matt</p>
      </footer>
    </div>
  );
}
