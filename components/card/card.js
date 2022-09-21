import Image from 'next/image';

import styles from './card.module.css';

export default function Card(props) {
  const { imgUrl, size } = props;

  const cardStyleMap = {
    large: styles.largeItem,
    medium: styles.mediumItem,
    small: styles.smallItem,
  };

  return (
    <div className={styles.container}>
      <div className={cardStyleMap[size]}>
        <Image
          src={imgUrl}
          alt='image'
          layout='fill'
          className={styles.cardImg}
        />
      </div>
    </div>
  );
}
