import Image from 'next/image';
import { useState } from 'react';

import styles from './card.module.css';

const defaultImageUrl =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80';

export default function Card(props) {
  const { imgUrl = { defaultImageUrl }, size = 'medium' } = props;

  const [imageSource, setImageSource] = useState(imgUrl);

  const cardStyleMap = {
    large: styles.largeItem,
    medium: styles.mediumItem,
    small: styles.smallItem,
  };

  function handleOnError() {
    setImageSource(defaultImageUrl);
  }

  return (
    <div className={styles.container}>
      <div className={cardStyleMap[size]}>
        <Image
          src={imageSource}
          alt='image'
          layout='fill'
          onError={handleOnError}
          className={styles.cardImg}
        />
      </div>
    </div>
  );
}
