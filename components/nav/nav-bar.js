import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './nav-bar.module.css';

export default function NavBar(props) {
  const { username } = props;

  const router = useRouter();

  function handleOnClickHome(event) {
    event.preventDefault();
    router.push('/');
  }

  function handleOnClickMyList(event) {
    event.preventDefault();
    router.push('/browse/my-list');
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href='/'>
          <div className={styles.logoWrapper}>Netflix</div>
        </a>

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
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
            </button>
            <div className={styles.navDropdown}>
              <div>
                <Link href='/login'>
                  <a className={styles.linkName}>Sign Out</a>
                </Link>
                <div className={styles.lineWrapper}></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
