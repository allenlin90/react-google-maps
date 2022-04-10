import { NextPage } from 'next';
import { useState, useEffect } from 'react';

interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

const Effect: NextPage = () => {
  const [data, setData] = useState<Comment[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log('API was called');
      });
  }, [count]);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
      {data.length &&
        data.map((comment, index) => <div key={index}>{comment.body}</div>)}
    </>
  );
};

export default Effect;
