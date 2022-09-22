import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Loading from '../components/loading/loading';
import { getMagicClient } from '../lib/magic';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleLoggedIn() {
      const magicClient = getMagicClient();
      const isLoggedIn = await magicClient.user.isLoggedIn();
      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/login');
      }
    }
    handleLoggedIn();
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, [router]);
  return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
