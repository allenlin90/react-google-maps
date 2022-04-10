import { NextPage } from 'next';
import { useState, useEffect, useMemo } from 'react';

interface Comment {
  name: string;
}

export const MemoPage: NextPage = () => {
  const [data, setData] = useState<Comment[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const findLongestName = (comments: Comment[]): string => {
    if (!comments || !comments.length) return '';
    console.log('This is an expensive calculation');

    return comments.reduce((longestName, comment) => {
      let currentName = comment.name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }

      return longestName;
    }, '');
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <>
      <h1>Longest Name</h1>
      {getLongestName}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1> toggle </h1>}
    </>
  );
};

export default MemoPage;
