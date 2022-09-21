import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import cls from 'classnames';

import styles from './card.module.css';

const defaultImageUrl =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80';

export default function Card(props) {
  const { imageUrl = { defaultImageUrl }, size = 'medium', key } = props;

  const [imageSource, setImageSource] = useState(imageUrl);

  const cardStyleMap = {
    large: styles.largeItem,
    medium: styles.mediumItem,
    small: styles.smallItem,
  };

  function handleOnError() {
    setImageSource(defaultImageUrl);
  }

  const scale = key === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imageMotionWrapper, cardStyleMap[size])}
        whileHover={{ ...scale }}
      >
        <Image
          src={imageSource}
          alt='image'
          layout='fill'
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
}
