import Image from 'next/image';
import React from 'react';

export default function ProductCardItem() {
  return (
    <figure className="relative flex h-auto w-full cursor-pointer flex-col overflow-hidden rounded-[12px] border-[1px] border-[var(--light-background)] transition-all duration-200 ease-in-out hover:border-[var(--primary-color)] hover:[box-shadow:var(--shadow-item)]">
      <div className="relative aspect-square w-full bg-[var(--light-gray)]">
        <Image
          loading="lazy"
          fill
          className="object-cover"
          src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Unsplash image"
        />
      </div>
      <figcaption className="flex flex-col p-[8px]">
        <div className="absolute top-0 right-0 flex flex-col rounded-bl-[12px] bg-[var(--primary-color)] px-[8px] py-[4px] [font-size:12px] text-[var(--white-color)]">
          <span>{'20%'}</span>
          <span>{'OFF'}</span>
        </div>
        <strong className="overflow-hidden text-ellipsis">{'Product Name'}</strong>
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
