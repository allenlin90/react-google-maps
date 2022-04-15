import {
  useEffect,
  useState,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';

type useTextSizing<T = HTMLDivElement> = (
  ref: RefObject<T>,
  heightThreshold?: number
) => { fontSize: boolean; textShrink: boolean };

type resizeHandler<T = HTMLDivElement> = (
  ref: RefObject<T>,
  setHeight: Dispatch<SetStateAction<number>>
) => (event: Event) => void;

export const useTextSizing: useTextSizing = (ref, heightThreshold = 35) => {
  const [textHeight, setTextHeight] = useState<number>(0);
  const [fontSize, setFontsize] = useState<boolean>(false);
  const [textShrink, setTextShrink] = useState<boolean>(false);

  const resizehandler: resizeHandler = (ref, setHeight) => () => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizehandler(ref, setTextHeight));

    if (ref.current) {
      setTextHeight(ref.current.offsetHeight);
    }

    return window.removeEventListener(
      'resize',
      resizehandler(ref, setTextHeight)
    );
  }, [ref]);

  useEffect(() => {
    if (textHeight > heightThreshold && !fontSize) {
      setFontsize(true);
    } else if (textHeight > heightThreshold) {
      setTextShrink(true);
    } else {
      setTextShrink(false);
      setFontsize(false);
    }
  }, [textHeight, fontSize, heightThreshold]);

  useEffect(() => {
    if (fontSize && ref.current) {
      setTextHeight(ref.current.offsetHeight);
    }
  }, [ref, fontSize]);

  return { fontSize, textShrink };
};

export default useTextSizing;
