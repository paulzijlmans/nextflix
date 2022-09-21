import Head from 'next/head';

import Banner from '../components/banner/banner';
import Card from '../components/card/card';
import NavBar from '../components/nav/nav-bar';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix clone based on NextJS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar username='paul@test.com' />
      <Banner
        title='Clifford the red dog'
        subTitle='a very cute dog'
        imgUrl='/static/clifford.webp'
      />
      <Card imgUrl='/static/clifford.webp' size='large' />
      <Card imgUrl='/static/clifford.webp' size='medium' />
      <Card imgUrl='/static/clifford.webp' size='small' />
    </div>
  );
}
