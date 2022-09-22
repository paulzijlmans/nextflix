import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getMagicClient } from '../../lib/magic';

import styles from './nav-bar.module.css';

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');

  const router = useRouter();

  useEffect(() => {
    async function getUsername() {
      try {
        const magicClient = getMagicClient();
        const { email } = await magicClient.user.getMetadata();
        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.error('Error retrieving email:', error);
      }
    }
    getUsername();
  }, []);

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

  async function handleSignout(event) {
    event.preventDefault();
    try {
      const magicClient = getMagicClient();
      await magicClient.user.logout();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out', error);
      router.push('/login');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href='/'>
          <a>
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
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
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
