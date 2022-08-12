import styled from 'styled-components';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

const Element = styled.div`
  height: 100vh;
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgImgMobile});
  filter: brightness(50%);
  @media screen and (min-width: 650px) {
    background-image: url(${(props) => props.bgImgDesktop});
  }
`;

function Slider({ data }) {
  const test = data || [];
  const items = test.items || [];

  /* const widthDeviceMobile = window.matchMedia('(max-width: 680px)').matches;
  const widthDeviceDesktop = window.matchMedia('(min-width: 680px)').matches; */
  return (
    <div className="relative">
      <Swiper
        loop={true}
        autoplay={{ delay: 4000 }}
        spaceBetween={10}
        modules={[Navigation, Autoplay, EffectFade]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.itemId}>
            <Element
              className="swiper-slide"
              bgImgMobile={item.posterPortrait ? item.posterPortrait : item.poster}
              bgImgDesktop={item.poster}
            />
            <div className="absolute bottom-1/4 left-1/4 w-[256px] h-[130px] text-white flex justify-between flex-col">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="text-ellipsis overflow-hidden ... w-[243px] h-[50px] text-md tracking-widest">{item.description}</p>
              <button className="bg-primary border-2 border-white p-2 w-[122px] rounded-md">
                Voir la vidéo
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Slider;
