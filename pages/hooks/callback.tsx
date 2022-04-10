import { NextPage } from 'next';
import { FC, useCallback, useEffect, useState } from 'react';

export const CallbackPage: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Yo, please sub to the channel!');

  const returnComment = useCallback((name?: string) => data + name, [data]);

  return (
    <>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1> toggle </h1>}
    </>
  );
};

export default CallbackPage;

const Child: FC<{ returnComment: (name?: string) => string }> = ({
  returnComment,
}) => {
  useEffect(() => {
    console.log('funciton was called');
  }, [returnComment]);

  return <div>{returnComment()}</div>;
};
