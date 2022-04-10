import { NextPage } from 'next';
import { MouseEvent, MouseEventHandler, useRef } from 'react';

export const Ref: NextPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log(inputRef.current?.value);
    inputRef.current?.focus();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Pedro</h1>
      <div>
        <input type='text' name='' id='' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
      </div>
    </section>
  );
};

export default Ref;
