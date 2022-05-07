import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { Loading } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  // Router.events.on('routeChangeStart', (url) => {
  //   console.log('route is changing');
  // });

  // Router.events.on('routeChangeComplete', (url) => {
  //   console.log('route changing completed');
  // });

  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
