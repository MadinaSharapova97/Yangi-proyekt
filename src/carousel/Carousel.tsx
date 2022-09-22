import { Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//images
import one from "../assets/images/img1.png"
import two from "../assets/images/img2.png"
import three from "../assets/images/img3.png"
import map from "../assets/images/map.png"
import { StyledCarousel } from './CarouselStyle';
// import map from "../../assets/images/map.png"

const slider = [
  {
    image: one,
  },
  {
    image: two,
  },
  {
    image: three,
  },
]

export default function Carousel() {
  return (
    <StyledCarousel className='container'>
      <h1>Maktablar</h1>
      <Swiper className=" "
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slider.map(({ image }, index) => {
          return (
            <SwiperSlide key={index} className="carousel">
              <div className="carousel-card">
                <img src={image} alt="img" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='map'>
        <img src={map} alt="" />
      </div>
      <div className='container_carousel'>
         <div className='maktablar'>
        <section>
          <p>Davlat maktablari</p>
          <h2>12 000+</h2>
        </section>
        <section>
          <p>Davlat maktablari</p>
          <h2>12 000+</h2>
        </section>
        <section>
          <p>Davlat maktablari</p>
          <h2>12 000+</h2>
        </section>
        <section>
          <p>Davlat maktablari</p>
          <h2>12 000+</h2>
        </section>
      </div>
      </div>
     

    </StyledCarousel>
  )
}