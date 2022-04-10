import { useRef, useEffect, useLayoutEffect, ChangeEvent } from 'react';
import { NextPage } from 'next';

export const LayoutEffect: NextPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useLayoutEffect runs before useEffect
  useLayoutEffect(() => {
    console.log(inputRef.current?.value);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = 'HELLO';
    }
  }, []);

  return (
    <div>
      <input
        type='text'
        value='PEDRO'
        ref={inputRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          console.log(event.target.value)
        }
      />
    </div>
  );
};

export default LayoutEffect;
