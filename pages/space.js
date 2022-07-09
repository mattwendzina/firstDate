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
          src="https://giphy.com/embed/5ezLwF73RgzQI"
          width="480"
          height="380"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <Link href="/competition ">
          <a className="text-3xl text-white my-4">
            Well anyways... let me clear some space
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p className="text-white">Powered by Matt</p>
      </footer>
    </div>
  );
}
