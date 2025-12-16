'use client';
import React, { useEffect, useRef } from 'react';
import { AngleDownIcon } from '../../../public/icons/icon-svg';

export default function LayoutSectionList({ children, title = 'Electronics' }) {
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
      <div className="flex items-center justify-between border-b-[1px] border-[var(--light-background)]">
        <div className="title-layout relative flex gap-[4px] px-[8px] pb-[8px]">
          <strong className="text-[var(--secondary-color)]">The Best Deal on</strong>
          <strong className="text-[var(--primary-color)]">{title}</strong>
        </div>

        <strong className="flex cursor-pointer items-center gap-[4px] pb-[8px] text-[var(--secondary-color)] hover:text-[var(--primary-color)]">
          See All <AngleDownIcon className="h-4 w-4 rotate-[270deg] text-[var(--primary-color)]" />
        </strong>
      </div>

      <div ref={listRef} className="flex gap-[16px] overflow-auto pt-[24px] pb-[8px] whitespace-nowrap [scrollbar-width:none]">
        {children}
      </div>
    </section>
  );
}
