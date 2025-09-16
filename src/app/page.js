import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import logo from "../../public/logo.png";
import Link from "next/link";

export default function Home({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.info}>
        <div className={styles.title_conta}>
          <h1>ADVERTENCIA!!!</h1>
        </div>
        <div className={styles.sub_conta}>
          <h2>VOTOS POR PARTE DEL PARTIDO VERDE HAN SIDO ROBADOS</h2>
        </div>
        <div className={styles.image_conta}>
          <Link
            href="https://www.instagram.com/somos_prepatala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logo} width={300} height={300} alt="logo" />
          </Link>
        </div>
      </div>
      <div className={styles.fraude_conta}>
        <h1>Ha habido un fraude por su parte</h1>
      </div>
      <div className={styles.footer_conta}>
        <h2>
           &quot;No estamos a favor de nadie, pero no queremos nuestra prepa pintada de verde.&quot;
        </h2>
      </div>
    </div>
  );
}
