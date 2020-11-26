import styled from 'styled-components';
import Link from 'next/link';
import MenuItem from 'components/MenuItem';
// types
import { Content } from 'types/cards';

const MenuLayout = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface Props {
  title: string;
  content: Content[];
}

const Menu: React.FC<Props> = ({ title, content }) => {
  return (
    <MenuLayout>
      <Link href="/[details]" as={`/${title}`}>
        <a> {title}</a>
      </Link>
      {content.map((item, i) => (
        <MenuItem content={item} key={i} />
      ))}
    </MenuLayout>
  );
};

export default Menu;
