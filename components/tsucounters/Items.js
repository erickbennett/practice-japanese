import Image from 'next/image';
import styled from 'styled-components';

const List = styled.div`
  background: radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
  background-color: #282828;
  background-size: 16px 16px;

  align-self: flex-end;
  padding: 20px;
  height: 75%;
  width: 60%;
  z-index: -2;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
`;

function Items({ items }) {
  //

  return (
    <List>
      {items?.map((item, i) => (
        <Image
          key={i}
          src={item.itemIcon}
          height={75}
          width={75}
          alt={item.itemText}
        />
      ))}
    </List>
  );
}

export default Items;
