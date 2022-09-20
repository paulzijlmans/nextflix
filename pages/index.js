import Head from 'next/head';

import Banner from '../components/banner';

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

      <Banner title='Clifford the red dog' subTitle='a very cute dog' imgUrl='/static/clifford.webp' />

      {/* <NavBar /> */}

      {/* <Card /> */}
    </div>
  );
}
