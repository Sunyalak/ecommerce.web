'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { PRODUCT_SLIDES_CAROUSEL } from '../../../constants/listProductCarousel';

export default function CarouselSlides() {
  return (
    <>
      <div className="relative">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
             pauseOnMouseEnter: true,
          }}
          effect={'fade'}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper carousel-slide-images"
        >
          {PRODUCT_SLIDES_CAROUSEL.map((item, index) => (
            <SwiperSlide key={index}>
              <figure className="relative h-[300px] w-full overflow-hidden rounded-[16px] border-[1px] border-[var(--white-color)] bg-[var(--white-color)]">
                <img className="relative object-cover" src={item?.image} alt={item?.name} />
                <figcaption className="absolute top-[32px] left-[64px] z-[1] flex flex-col gap-[8px] text-[var(--white-color)]">
                  <span className="[font-size:var(--h5-font-size)]">{item?.description}</span>
                  <strong className="[font-size:42px] leading-[1]">{item?.name}</strong>
                  <span className="[font-size:var(--h4-font-size)]">{item?.offer}</span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
