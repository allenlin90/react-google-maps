import { NextPage } from 'next';
import Image from 'next/image';
import { useState, useRef } from 'react';

const items = [
  {
    id: 1,
    itemName: 'test 1',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nostrum accusamus ex dignissimos inventore totam incidunt nemo consequatur sunt atque.`,
  },
  {
    id: 2,
    itemName: 'test 2',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nostrum accusamus ex dignissimos inventore totam incidunt nemo consequatur sunt atque.`,
  },
  {
    id: 3,
    itemName: 'test 3',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nostrum accusamus ex dignissimos inventore totam incidunt nemo consequatur sunt atque.`,
  },
];

export const ScrollSpyPage: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const option = useRef(null);

  return (
    <section>
      {/* <h1 style={{ textAlign: 'center' }}>Scroll Spy</h1> */}
      <Image
        width='16'
        height='10'
        src='https://images.unsplash.com/photo-1564419431636-fe02f0eff7aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80'
        layout='responsive'
        alt='water'
      />
      <div style={{ padding: '.5rem' }}>
        <h1 style={{ margin: 0 }}>Floating Journey</h1>
      </div>
      <div
        style={{
          padding: '.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <select name='' id='' value={selectedItem} style={{ width: '100%' }}>
          {items.map(({ id, itemName }) => (
            <option key={id} value={id}>
              {itemName}
            </option>
          ))}
        </select>
      </div>
      <div style={{ padding: '.5rem' }}>
        <p style={{ margin: '0', color: '#777' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          consectetur eveniet molestias doloribus optio iste saepe perferendis
          nihil eius facilis deleniti, quibusdam velit odit magni fugit cum, vel
          exercitationem provident.
        </p>
      </div>
      <hr
        style={{
          backgroundColor: '#eee',
          border: '0.5px #eee solid',
          margin: '0',
        }}
      />
      <div>
        <ul style={{ margin: 0, padding: 0 }}>
          {items.map(({ id, itemName, description }) => (
            <li
              key={id}
              style={{
                textDecoration: 'none',
                listStyle: 'none',
                padding: '.5rem',
                color: '#777',
              }}
            >
              <div>{description}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ScrollSpyPage;
