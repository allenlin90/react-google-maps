import { NextPage } from 'next';
import { ListItem } from 'components';
import classes from './ElementSize.module.css';

const items = new Array(3).fill(null).map(() => ({}));

export const ElementSizePage: NextPage = () => {
  return (
    <section className={classes.bg}>
      <ul className={classes.list_wrapper}>
        {items.map((item, index) => (
          <ListItem key={`item_${index}`} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default ElementSizePage;
