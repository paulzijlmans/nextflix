import Link from 'next/link';

import Card from './card';

import styles from './section-cards.module.css';

export default function SectionCards({ title, videos = [], size }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => (
          <Link key={idx} href={`/video/${video.id}`}>
            <a>
              <Card key={idx} id={idx} imageUrl={video.imageUrl} size={size} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
