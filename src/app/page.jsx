import CarouselSlides from './_components/CarouselSlides';
import LayoutSectionList from './_components/LayoutSectionList';
import ProductCardItem from './_components/ProductCardItem';

export default function HomePage() {
  return (
    <>
      <section className="selection-carousel-slide py-[16px]">
        <div className="container mx-auto">
          <CarouselSlides />
        </div>
      </section>

      <section className="mt-[50px]">
        <div className="container mx-auto">
          <LayoutSectionList>
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductCardItem key={index} />
            ))}
          </LayoutSectionList>
        </div>
      </section>
    </>
  );
}
