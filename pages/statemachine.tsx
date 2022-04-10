import { NextPage } from 'next';
import { useEffect, useState } from 'react';

export const StateMachinePage: NextPage = () => {
  const [state, setState] = useState<string>('idle');

  const clicked = () => {
    setState('loading');
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState('loaded');
      })
      .catch((err) => setState('error'));
  };

  if (state === 'loading') {
    return <div>Loading...</div>;
  }

  if (state === 'error') {
    return <div>Error fetching your request</div>;
  }

  return <section onClick={clicked}>Current state: {state}</section>;
};

export default StateMachinePage;
