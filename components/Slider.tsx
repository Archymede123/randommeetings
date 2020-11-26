import { useEffect, useRef, WheelEvent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// types
import { Content } from 'types/cards';

const SliderLayout = styled.div`
  /* overflow-y: hidden; */

  /* scrollbar-width: none; */

  .photoRow {
    margin-top: 148px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100vw;
    /* height: 300px; */
    display: flex;
    /* touch-action: none; */
    scrollbar-width: none;
    /* scroll-behavior: smooth; */

    &__image {
      width: 700px;
      height: 400px;
      margin: 0 48px;
      object-fit: contain;
      transform: translateX(-50%);

      &:first-child {
        margin-left: 50%;
      }
    }

    img {
      margin-right: 35px;
      height: 100%;
      object-fit: contain;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .sliderContent {
    text-align: center;
    max-width: 40%;
    margin: 0 auto;
  }
`;

interface Props {
  setCanScroll: (arg0: boolean) => void;
  content: Content;
}

const Slider: React.FC<Props> = ({ content: { title, shortDescription, longDescription }, setCanScroll }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleOnWheel = (e: WheelEvent) => {
    if (!ref.current) return;

    // if (
    //   (e.deltaY < 0 && ref.current.scrollLeft === 0) ||
    //   (e.deltaY > 0 && ref.current.scrollLeft + window.innerWidth >= ref.current.scrollWidth)
    // ) {
    //   return setCanScroll(true);
    // } else {
    //   setCanScroll(false);
    // }

    const containerScrollPosition = ref.current.scrollLeft;
    ref.current.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });

    // if (null !== ref.current) {
    //   const containerScrollPosition = ref.current.scrollLeft;
    //   ref.current.scrollTo({
    //     top: 0,
    //     left: containerScrollPosition + e.deltaY,
    //   });
    // }
  };

  // useEffect(() => {
  //   const div = ref.current;
  //   div?.addEventListener('wheel', (e) => handleOnWheel(e), { passive: false });

  //   return () => {
  //     div?.removeEventListener('wheel', (e) => handleOnWheel(e));
  //   };
  // }, []);

  return (
    <SliderLayout>
      <div
        className="photoRow"
        ref={ref}
        // onWheel={(e: WheelEvent) => handleOnWheel(e)}
        // onMouseEnter={() => setCanScroll(false)}
        // onMouseLeave={() => setCanScroll(true)}
      >
        <div className="photoRow__image">
          <img src="https://source.unsplash.com/user/erondu" alt="lol" />
        </div>
        <div className="photoRow__image">
          <img src="https://source.unsplash.com/user/erondu" alt="lol" />
        </div>
        <div className="photoRow__image">
          <img src="https://source.unsplash.com/user/erondu" alt="lol" />
        </div>
        <div className="photoRow__image">
          <img src="https://source.unsplash.com/user/erondu" alt="lol" />
        </div>
        <div className="photoRow__image">
          <img src="https://source.unsplash.com/user/erondu" alt="lol" />
        </div>
      </div>
      <div className="sliderContent">
        <p>{title}</p>
        <p>{shortDescription}</p>
        <p>{longDescription}</p>
      </div>
    </SliderLayout>
  );
};

export default Slider;
