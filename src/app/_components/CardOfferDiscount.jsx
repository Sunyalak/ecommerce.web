import Image from 'next/image';
import React from 'react';

export default function CardOfferDiscount() {
  return (
    <figure className="group flex cursor-pointer flex-col items-center justify-center gap-[16px]">
      <div className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-[12px] border-[2px] border-[var(--light-background)] bg-[var(--light-gray)] transition-all duration-200 ease-in-out group-hover:border-[var(--primary-color)] group-hover:[box-shadow:var(--shadow-item)]">
        <Image
          className="object-cover"
          fill
          src="https://images.unsplash.com/photo-1656581662573-8dbeee417ed8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Unsplash image"
        />
      </div>
      <figcaption className="flex flex-col items-center group-hover:[text-shadow:var(--shadow-text)]">
        <span>{'Daily Essentials'}</span>
        <strong className="[font-size:var(--h5-font-size)]">{'UP to 50% OFF'}</strong>
      </figcaption>
    </figure>
  );
}
