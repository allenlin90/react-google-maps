import { NextPage } from 'next';
import { GoogleMap } from 'components';

export const GGMapReactPage: NextPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMap />
    </div>
  );
};

export default GGMapReactPage;
