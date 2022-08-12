import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import styles from './Slider.module.css';
/* 
import 'swiper/css';
import 'swiper/css/navigation'; */
const Element = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgImgMobile});
  @media screen and (min-width: 650px) {
    background-image: url(${(props) => props.bgImgDesktop});
  }
`;

function Slider({ data }) {
  const dataSlide = data || [];
  const items = dataSlide.items || [];

  return (
 /*    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      grabCursor={true}
    >
      {items.map((item) => (
        <SwiperSlide key={item.itemId}>
        <div>
        <Element bgImgMobile={item.posterPortrait} bgImgDesktop={item.poster}>
            zezezee
          </Element>
        </div>
          
        </SwiperSlide>
      ))}
    </Swiper> */
  );
}

export default Slider;
