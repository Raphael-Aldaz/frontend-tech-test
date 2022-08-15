import styled from 'styled-components';

import CardCarousel from './CardCarousel';
const CarouselWrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  @media screen and (min-width: 650px) {
    &::-webkit-scrollbar {
      display: block;
      -ms-overflow-style: block; /* IE and Edge */
      scrollbar-width: block; /* Firefox */
    }
  }
`;
function Carousel({ data }): JSX.Element {
  const dataItems = data.items || [];
  console.log(dataItems, 'dataitems');
  return (
    <div className="ml-[27px]">
      <h1 className="uppercase">Static - Portrait</h1>
      <CarouselWrapper className=" flex overflow-scroll gap-[16px]  ">
        {dataItems.map((item) => (
          <CardCarousel key={item.itemId} dataItems={item} />
        ))}
      </CarouselWrapper>
    </div>
  );
}
export default Carousel;
