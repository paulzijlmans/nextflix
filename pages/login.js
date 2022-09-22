import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getMagicClient } from '../lib/magic';

import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    function handleRouteChange() {
      setIsLoading(false);
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, [router]);

  async function handleLoginWithEmail(event) {
    event.preventDefault();
    setIsLoading(true);

    if (email) {
      if (email === 'pzijlmans81@gmail.com') {
        try {
          const magicClient = getMagicClient();
          const token = await magicClient.auth.loginWithMagicLink({ email });
          if (token) {
            router.push('/');
          }
        } catch (error) {
          console.error('Error during logging in', error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setUserMessage('Unknown email address');
      }
    } else {
      setIsLoading(false);
      setUserMessage('Enter a valid email address');
    }
  }

  function handleOnChangeEmail(event) {
    setUserMessage('');
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Sign In</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
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
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signInHeader}>Sign In</h1>
          <input
            type='text'
            placeholder='Email address'
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMessage}>{userMessage}</p>
          <button className={styles.loginButton} onClick={handleLoginWithEmail}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </main>
    </div>
  );
}
