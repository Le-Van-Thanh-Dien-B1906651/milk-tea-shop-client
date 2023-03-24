import Carousel from 'react-bootstrap/Carousel';

function CarouselAds() {
  return (
    <Carousel className='carousel-ads' indicators={false} fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/113999621/222424988-f45cf164-62ad-4c17-90cb-044f6ab6dec6.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/113999621/222425026-43a87622-fe21-45be-b6fe-c5d6efa7ffc5.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAds
