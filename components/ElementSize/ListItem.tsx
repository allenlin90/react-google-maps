import { useRef, FC, CSSProperties } from 'react';
import Image from 'next/image';
import classes from './ListItem.module.css';
import { useTextSizing } from 'hooks';

export interface ListItem {
  img?: string;
  text?: string;
  index?: number;
}

const textHolder1 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequunturconsectetur fuga at maiores ratione id ducimus porro beatae illum voluptatum.';
const textHolder2 = 'Lorem ipsum dolor sit amet consectetur.';

const textStyle = {
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical' as CSSProperties['WebkitBoxOrient'],
  lineHeight: '1.2rem',
};

export const ListItem: FC<ListItem> = ({ img, text, index }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { fontSize, textShrink } = useTextSizing(textRef);

  return (
    <li className={classes.list_item}>
      <div className={classes.list_item__img}>
        <Image
          src={
            img ??
            'https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          }
          alt={`header_${index}`}
          width={1}
          height={1}
          layout='responsive'
        />
      </div>
      <div
        className={classes.list_item__text}
        ref={textRef}
        style={{
          fontSize: fontSize ? '0.8rem' : '1rem',
          ...(textShrink && textStyle),
        }}
      >
        {text ?? index ? textHolder1 : textHolder2}
      </div>
    </li>
  );
};

export default ListItem;
