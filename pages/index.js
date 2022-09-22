import Head from 'next/head';

import Banner from '../components/banner/banner';
import SectionCards from '../components/card/section-cards';
import NavBar from '../components/nav/nav-bar';
import { getPopularVideos, getVideos } from '../lib/videos';

import styles from '../styles/Home.module.css';

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix clone based on NextJS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <NavBar />
        <Banner
          videoId='mYfJxlgR2jw'
          title='Clifford the red dog'
          subTitle='a very cute dog'
          imgUrl='/static/clifford.webp'
        />
        <div className={styles.sectionWrapper}>
          <SectionCards title='Disney' videos={disneyVideos} size='large' />
          <SectionCards title='Travel' videos={travelVideos} size='small' />
          <SectionCards
            title='Productivity'
            videos={productivityVideos}
            size='medium'
          />
          <SectionCards title='Popular' videos={popularVideos} size='small' />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('Productivity');
  const travelVideos = await getVideos('indie music');
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
}
