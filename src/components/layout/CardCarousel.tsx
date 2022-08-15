import styled from 'styled-components';
const CardWrapper = styled.div`
  transition: 1s;
  &:hover {
    transform: scale(1.05);
    background-color: orange;
    filter: brightness(orange, 80%);
    .description {
      display: block;
    }
  }
`;
const CarouselCard = styled.div`
  height: 220px;
  width: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.carouselImg});
  filter: brightness(60%);
  @media screen and (min-width: 650px) {
    height: 628px;
    width: 418px;
    transition: 1s;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const CarouselText = styled.div`
  .description {
    display: none;
  }
`;
function CardCarousel({ dataItems }) {
  return (
    <CardWrapper className=" relative ">
      <CarouselCard
        carouselImg={dataItems.posterPortrait ? dataItems.posterPortrait : dataItems.poster}
      />
      <CarouselText className="text-white absolute bottom-4 left-3 flex">
        <h3>{dataItems.name}</h3>
        <p className="description">{dataItems.description}</p>
        <p>{dataItems.duration}</p>
      </CarouselText>
    </CardWrapper>
  );
}
export default CardCarousel;
