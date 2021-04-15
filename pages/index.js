import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis beatae enim! Explicabo aspernatur amet assumenda quidem eos alias, sint minima pariatur eaque natus reiciendis laudantium nisi. Quae, totam unde!</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis beatae enim! Explicabo aspernatur amet assumenda quidem eos alias, sint minima pariatur eaque natus reiciendis laudantium nisi. Quae, totam unde!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>);
}
