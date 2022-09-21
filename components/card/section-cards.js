import Card from './card';
import styles from './section-cards.module.css';

export default function SectionCards(props) {
  const { title, videos, size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => (
          <Card key={idx} imageUrl={video.imageUrl} size={size} />
        ))}
      </div>
    </section>
  );
}
