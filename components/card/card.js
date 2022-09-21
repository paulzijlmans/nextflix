import Image from 'next/image';
import { useState } from 'react';

import styles from './card.module.css';

export default function Card(props) {
  const { imgUrl = '/static/clifford.webp', size = 'medium' } = props;

  const [imageSource, setImageSource] = useState(imgUrl);

  const cardStyleMap = {
    large: styles.largeItem,
    medium: styles.mediumItem,
    small: styles.smallItem,
  };

  function handleOnError() {
    setImageSource('/static/clifford.webp');
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
