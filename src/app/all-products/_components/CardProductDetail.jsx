'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  CartPlusIcon,
  HeartFillIcon,
  HeartOutLineIcon,
  StatFillIcon,
  StatOutLineIcon,
} from '../../../../public/icons/icon-svg';
import PriceText from './PriceText';
import StatusProduct from './StatusProduct';

export default function CardProductDetail({ discount, status }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      <div className="group relative flex h-auto w-full cursor-pointer flex-col overflow-hidden rounded-[12px] border-[1px] border-[var(--light-background)] transition-all duration-200 ease-in-out hover:border-[var(--primary-color)] hover:[box-shadow:var(--shadow-item)]">
        <figure className="relative h-[260px] w-full overflow-hidden">
          {status && <StatusProduct status="SALE" />}
          <Image
            className="object-cover"
            fill
            src="https://plus.unsplash.com/premium_photo-1680623400141-7e129b7c56d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Unsplash image"
          />
          <Image
            className="object-cover transition-all duration-400 ease-in-out group-hover:opacity-0"
            fill
            src="https://plus.unsplash.com/premium_photo-1680623401850-3ec6868dabdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Unsplash image"
          />
        </figure>
        <figcaption className="flex flex-grow flex-col gap-[4px] px-[16px] py-[8px]">
          <strong>test</strong>
          <p className="text-[12px] text-[var(--secondary-color)]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, quisquam!
          </p>
          <PriceText discount={discount} />
          <div className="mt-auto flex items-center justify-between">
            <div className="flex gap-[2px]">
              {Array.from({ length: 4 }).map((item, index) => (
                <StatFillIcon className="h-4 w-4 text-[#5a7863]" key={index} />
              ))}
              {Array.from({ length: 1 }).map((item, index) => (
                <StatOutLineIcon className="h-4 w-4 text-[#5a7863]" key={index} />
              ))}
            </div>

            <div className="flex gap-[8px]">
              <div
                className="rounded-full p-[4px] hover:bg-[var(--light-background)]"
                onClick={() => setFavorite((prev) => !prev)}
              >
                {favorite ? <HeartFillIcon /> : <HeartOutLineIcon />}
              </div>
              <div className="rounded-full p-[4px] hover:bg-[var(--light-background)]">
                <CartPlusIcon />
              </div>
            </div>
          </div>
        </figcaption>
      </div>
    </>
  );
}
