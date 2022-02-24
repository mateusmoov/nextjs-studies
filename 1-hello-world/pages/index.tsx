import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pagina Principal</title>
      </Head>
      <div className={styles.container}>
        <h1>Hello world</h1>
      </div>
    </>
  );
}
