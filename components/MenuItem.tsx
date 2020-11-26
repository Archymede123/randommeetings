import React from 'react';
import styled from 'styled-components';
import { Content } from 'types/cards';

const MenuItemLayout = styled.div`
  width: 90%;
  height: 300px;
  background: yellow;

  img {
    width: 100%;
  }
`;

interface Props {
  content: Content;
}

const MenuItem: React.FC<Props> = ({ content: { title, shortDescription } }) => {
  return (
    <MenuItemLayout>
      <img src="https://source.unsplash.com/user/erondu/400x200" alt="image alt attr" />
      <p>{title}</p>
      <p>{shortDescription}</p>
    </MenuItemLayout>
  );
};

export default MenuItem;
