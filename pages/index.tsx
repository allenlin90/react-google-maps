import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'cetner',
          alignItems: 'center',
        }}
      >
        <Link href='/googlemaps'>googlemaps</Link>
        <Link href='/ggmap-react'>ggmap-react</Link>
        <Link href='/statemachine'>statemachine</Link>
        <Link href='/windowsize'>windowsize</Link>
      </div>
    </section>
  );
};

export default Home;
