import { useEffect, useRef } from 'react';
import CategoryItem from './CategoryItem';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel } from 'swiper/modules';

export default function ListFilterCategory() {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', onWheel, { passive: false });

    return () => el.removeEventListener('wheel', onWheel);
  }, []);
  return (
    <section>
      <div className="py-[16px]">
        <div className="container mx-auto overflow-hidden">
          <div className="relative">
            <Swiper
              loop={false}
              modules={[Mousewheel]}
              className="mySwiper category-filter-item"
              slidesPerView="auto"
              spaceBetween={16}
              mousewheel={true}
            >
              {Array.from({ length: 36 }).map((item, index) => (
                <SwiperSlide key={index}>
                  <CategoryItem title={`Category ${index + 1}`} active={index === 3} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <hr className="h-[1px] w-full border-none bg-[var(--light-gray)]" />
    </section>
  );
}
