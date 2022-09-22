import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from './nav-bar.module.css';

export default function NavBar({ username }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  function handleOnClickHome(event) {
    event.preventDefault();
    router.push('/');
  }

  function handleOnClickMyList(event) {
    event.preventDefault();
    router.push('/browse/my-list');
  }

  function handleShowDropdown(event) {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href='/'>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <Image
                src='/static/netflix.svg'
                alt='Netflix logo'
                width='128px'
                height='34px'
              />
            </div>
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItemHome} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItemMyList} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src='/static/expand_more.svg'
                alt='Expand more'
                width='24px'
                height='24px'
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href='/login'>
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
