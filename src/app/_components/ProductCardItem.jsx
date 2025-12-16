import Image from 'next/image';
import React from 'react';

export default function ProductCardItem() {
  return (
    <figure className="relative flex h-[320px] min-w-[230px] cursor-pointer flex-col overflow-hidden rounded-[8px] border-[1px] border-[var(--light-background)] hover:border-[var(--primary-color)] hover:[box-shadow:var(--shadow-item)] transition-all duration-200 ease-in-out">
      <div className="relative aspect-square w-full bg-gray-400">
        <Image
          fill
          className="object-cover"
          src="https://plus.unsplash.com/premium_photo-1681233752681-6cec13be58a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Unsplash image"
        />
      </div>
      <figcaption className="flex flex-col p-[8px]">
        <strong>{'Product Name'}</strong>
        <div>
          <strong>{'฿10,999'}</strong>
          <span className="ml-[8px] text-[12px] [text-decoration:line-through]">{'฿12,999'}</span>
        </div>
        <hr className="my-[4px] h-[1px] w-full border-none bg-[var(--light-background)]" />
        <div className="text-[var(--primary-color)]">
          <strong>{'Save - '}</strong>
          <strong>{'฿2,000'}</strong>
        </div>
      </figcaption>
    </figure>
  );
}
