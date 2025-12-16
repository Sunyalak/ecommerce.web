import React from 'react';
import { SaleIcon, TruckIcon } from '../../../public/icons/icon-svg';
import Image from 'next/image';
import { IMAGES } from '../../../public/images/images';

export default function WelcomeHeaderBar() {
  return (
    <>
      <nav className="h-auto w-full bg-[var(--light-background)] py-[8px]">
        <div className="container mx-auto flex items-center justify-between">
          <figure className="flex items-center gap-[8px]">
            <div className="h-[32px] w-[32px] min-w-[32px] overflow-hidden rounded-full">
              <Image src={IMAGES.FAVICON} alt="LOGO-FAV" />
            </div>
            <figcaption>
              <span className="text-[var(--secondary-color)]">E-commerce.Web Shop</span>
            </figcaption>
          </figure>

          <div className="flex items-center gap-[16px]">
            <span className="flex cursor-pointer items-center gap-[8px] text-[var(--secondary-color)] hover:text-[var(--primary-color)]">
              <TruckIcon />
              {'Tracking your orders'}
            </span>
            <span className="block h-[20px] w-[1px] bg-[var(--secondary-color)]"></span>
            <span className="flex cursor-pointer items-center gap-[8px] text-[var(--secondary-color)] hover:text-[var(--primary-color)]">
              <SaleIcon />
              {'All Offers'}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
