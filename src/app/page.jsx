'use client';
import { SwiperSlide } from 'swiper/react';
import CarouselSlides from './_components/CarouselSlides';
import CategoryCardItem from './_components/CategoryCardItem';
import LayoutSectionList from './_components/LayoutSectionList';
import ProductCardItem from './_components/ProductCardItem';
import CardBrandsOffer from './_components/CardBrandsOffer';
import CardOfferDiscount from './_components/CardOfferDiscount';
import ListFilterCategory from './_components/ListFilterCategory';

export default function HomePage() {
  return (
    <>
    <ListFilterCategory/>
      <section className="selection-carousel-slide py-[16px]">
        <div className="container mx-auto">
          <CarouselSlides />
        </div>
      </section>

      <section className="mt-[50px]">
        <div className="container mx-auto">
          <LayoutSectionList title="Electronics" text="The Best Deal on" loop={true} mousewheel={true}>
            {Array.from({ length: 10 }).map((item, index) => (
              <SwiperSlide key={index}>{<ProductCardItem />}</SwiperSlide>
            ))}
          </LayoutSectionList>
        </div>
      </section>

      <section className="mt-[50px]">
        <div className="container mx-auto">
          <LayoutSectionList text="Shop Form" title="Categories" loop={true} mousewheel={true} slidesPerView={6} gap={54}>
            {Array.from({ length: 10 }).map((item, index) => (
              <SwiperSlide key={index}>{<CategoryCardItem />}</SwiperSlide>
            ))}
          </LayoutSectionList>
        </div>
      </section>

      <section className="mt-[50px]">
        <div className="container mx-auto">
          <LayoutSectionList text="The Best Brands" title="Smartphone" loop={true} mousewheel={true} pagination={true} slidesPerView={3}>
            {Array.from({ length: 10 }).map((item, index) => (
              <SwiperSlide key={index}>{<CardBrandsOffer />}</SwiperSlide>
            ))}
          </LayoutSectionList>
        </div>
      </section>

       <section className="mt-[50px]">
        <div className="container mx-auto">
          <LayoutSectionList text="The Best Brands" title="Smartphone" loop={true} mousewheel={true} slidesPerView={6}>
            {Array.from({ length: 10 }).map((item, index) => (
              <SwiperSlide key={index}>{<CardOfferDiscount />}</SwiperSlide>
            ))}
          </LayoutSectionList>
        </div>
      </section>
    </>
  );
}
