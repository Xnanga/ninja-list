import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Sample Text Sample Text Sample Text Sample Text Sample Text Sample
          Text Sample Text Sample Text Sample Text Sample Text Sample Text
          Sample Text{" "}
        </p>
        <p className={styles.text}>
          Sample Text Sample Text Sample Text Sample Text Sample Text Sample
          Text Sample Text Sample Text Sample Text Sample Text Sample Text
          Sample Text{" "}
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listings</a>
        </Link>
      </div>
    </>
  );
}
