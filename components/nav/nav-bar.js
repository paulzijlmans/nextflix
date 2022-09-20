import styles from './nav-bar.module.css';

export default function NavBar(props) {
  const { username } = props;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href='/'>
          <div className={styles.logoWrapper}>Netflix</div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItemHome}>Home</li>
          <li className={styles.navItemMyList}>My List</li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
            </button>
            <div className={styles.navDropdown}>
              <div>
                <a className={styles.linkName}>Sign Out</a>
                <div className={styles.lineWrapper}></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
