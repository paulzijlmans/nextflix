import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix clone based on NextJS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Nextflix</h1>
    </div>
  );
}
