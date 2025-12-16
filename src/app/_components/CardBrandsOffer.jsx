import Image from 'next/image';
import React from 'react';

export default function CardBrandsOffer() {
  return (
    <figure className="relative h-[280px] w-full cursor-pointer overflow-hidden rounded-[12px] border-[1px] border-[var(--light-background)] bg-[var(--light-gray)] transition-all duration-200 ease-in-out hover:border-[var(--primary-color)] hover:[box-shadow:var(--shadow-item)]">
      <Image
        className="object-cover"
        fill
        src="https://plus.unsplash.com/premium_photo-1680623400141-7e129b7c56d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Unsplash image"
      />
    </figure>
  );
}
