import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { content } from 'settings/content';
import { Content } from 'types/cards';
import Slider from 'components/Slider';
import { useState } from 'react';

const DetailsLayout = styled.div<{ canScroll: boolean }>`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  /* overflow-y: ${({ canScroll }) => (canScroll ? 'auto' : 'hidden')}; */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

const Details: React.FC = () => {
  const router = useRouter();
  const { details } = router.query as { details: string };
  // const { details } = router.query as { details: keyof typeof content };

  const [canScroll, setCanScroll] = useState(false);

  return (
    <DetailsLayout canScroll={canScroll}>
      <Link href="/" as="/">
        <a>retour</a>
      </Link>
      {hasKey(content, details) && (
        <>
          <p>Welcome on the {details} project page</p>
          {content[details].map((content: Content, i: number) => (
            <div key={i}>
              <Slider content={content} setCanScroll={setCanScroll} />
            </div>
          ))}
        </>
      )}
    </DetailsLayout>
  );
};

export default Details;

// https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
