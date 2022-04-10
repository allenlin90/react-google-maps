import { FC } from 'react';
import { ChildComponentProps } from 'google-map-react';

export const GoogleMapChild: FC<Partial<ChildComponentProps>> = ({
  lat,
  lng,
}) => {
  return <div>center</div>;
};

export default GoogleMapChild;
