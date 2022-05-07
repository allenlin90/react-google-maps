import { useState, useEffect, FC } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import classes from './Loading.module.css';

export const Loading: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    if (document) {
      setPortalContainer(document.getElementById('myportal'));
    }
  }, []);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };

    const handleComplete = () => setLoading(false);
    // const handleComplete = () => setTimeout(() => setLoading(false), 5000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  const LoaderView = () => (
    <div className={classes.backdrop}>
      <div className={classes.backdrop__text}>Loading...</div>
    </div>
  );

  return loading && portalContainer ? (
    createPortal(<LoaderView />, portalContainer)
  ) : (
    <></>
  );
};

export default Loading;
