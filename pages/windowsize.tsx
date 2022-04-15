import { NextPage } from 'next';
import { useEffect, useState } from 'react';

export const WindowSizePage: NextPage = () => {
  const [{ height, width }] = useWindowSize();
  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>height: {height}</div>
      <div>width: {width}</div>
    </section>
  );
};

export default WindowSizePage;

const useWindowSize = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [
    { height, width },
    { setWidth, setHeight },
  ];
};
