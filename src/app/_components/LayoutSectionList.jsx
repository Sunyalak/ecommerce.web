'use client';
import React, { useEffect, useRef } from 'react';
import { AngleDownIcon } from '../../../public/icons/icon-svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFade, Mousewheel, Navigation, Pagination } from 'swiper/modules';

export default function LayoutSectionList({
  children,
  title = 'Electronics',
  text = 'The Best Deal on',
  gap = 16,
  navigation = false,
  pagination = false,
  autoplay = false, //{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }
  mousewheel = false,
  loop = false,
  slidesPerView = 6,
}) {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      el.scrollLeft += delta;
    };

    el.addEventListener('wheel', onWheel, { passive: false });

    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between border-b-[1px] border-[var(--light-background)]">
        <div className="title-layout relative flex gap-[4px] px-[8px] pb-[8px]">
          <strong className="text-[var(--secondary-color)]">{text}</strong>
          <strong className="text-[var(--primary-color)]">{title}</strong>
        </div>

        <strong className="flex cursor-pointer items-center gap-[4px] pb-[8px] text-[var(--secondary-color)] hover:text-[var(--primary-color)]">
          {'See All'} <AngleDownIcon className="h-4 w-4 rotate-[270deg] text-[var(--primary-color)]" />
        </strong>
      </div>

      {/* <div
        ref={listRef}
        style={{ gap: gap }}
        className="flex overflow-auto pt-[24px] pb-[8px] whitespace-nowrap [scrollbar-width:none]"
      >
        {children}
      </div> */}

      <div className="relative mt-[24px]">
        <Swiper
          pagination={pagination}
          loop={loop}
          slidesPerView={slidesPerView}
          spaceBetween={gap}
          navigation={navigation}
          autoplay={autoplay}
          mousewheel={mousewheel}
          modules={[EffectFade, Navigation, Pagination, Autoplay, Mousewheel]}
          className="mySwiper layout-section-list"
          style={{
            paddingBottom:pagination?'24px':'16px'
          }}
        >
          {children}
        </Swiper>
      </div>
    </section>
  );
}
