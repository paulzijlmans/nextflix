import Head from 'next/head';

import Banner from '../components/banner/banner';
import Card from '../components/card/card';
import SectionCards from '../components/card/section-cards';
import NavBar from '../components/nav/nav-bar';
import { getVideos } from '../lib/videos';

import styles from '../styles/Home.module.css';

export default function Home({ disneyVideos }) {
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
      <div className={styles.sectionWrapper}>
        <SectionCards title='Disney' videos={disneyVideos} size='large' />
        <SectionCards title='Disney' videos={disneyVideos} size='medium' />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const disneyVideos = getVideos();

  return {
    props: { disneyVideos },
  };
}
