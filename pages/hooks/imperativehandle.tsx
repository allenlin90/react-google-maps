import { useImperativeHandle, useState, useRef, forwardRef } from 'react';
import { NextPage } from 'next';

export const ImperativeHandlerPage: NextPage = () => {
  const buttonRef = useRef<ButtonRefObject | null>(null);

  return (
    <>
      <button
        onClick={() => {
          if (buttonRef.current) {
            buttonRef.current.alterToggle();
          }
        }}
      >
        Button from parent
      </button>
      <Button ref={buttonRef} />
    </>
  );
};

interface ButtonRefObject {
  alterToggle: () => void;
}

const Button = forwardRef<ButtonRefObject>((props, ref) => {
  const [buttonText, setButtonText] = useState('Button From Child');
  const [toggle, setToggle] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const alterToggle = () => {
    setToggle((value) => !value);
  };

  useImperativeHandle(ref, () => ({
    alterToggle,
  }));

  return (
    <>
      <button ref={buttonRef} onClick={alterToggle}>
        {buttonText}
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default ImperativeHandlerPage;
