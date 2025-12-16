'use client';
import React, { useEffect, useRef } from 'react';
import SearchNav from './SearchNav';
import { CartIcon, UserIcon } from '../../../public/icons/icon-svg';
import CategoryItem from './CategoryItem';

export default function NavHeader() {
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
    <nav>
      <div className="py-[16px] ">
        <div className="container mx-auto flex w-full items-center justify-between ">
          <div className="flex items-center gap-[8px]">
            <div className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h1 className="[font-size:var(--h2-font-size)] font-bold text-[var(--primary-color)]">{'Ecommerce.web'}</h1>
          </div>

          <div className="flex items-center gap-[32px]">
            <div className="w-[600px]">
              <SearchNav />
            </div>
            <div className="flex items-center gap-[16px]">
              <span className="flex cursor-pointer items-center gap-[8px] text-[var(--secondary-color)] hover:text-[var(--primary-color)]">
                <UserIcon />
                {'Sign Up/Sign In'}
              </span>
              <span className="block h-[20px] w-[1px] bg-[var(--secondary-color)]"></span>
              <span className="flex cursor-pointer items-center gap-[8px] text-[var(--secondary-color)] hover:text-[var(--primary-color)]">
                <CartIcon />
                {'Cart'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[1px] w-full border-none bg-[var(--light-gray)]" />
      <div className="py-[16px]">
        <div className="container mx-auto overflow-hidden">
          <div ref={listRef} className="flex w-full gap-[16px] overflow-auto [scrollbar-width:none]">
            {Array.from({ length: 36 }).map((_, i) => (
              <CategoryItem key={i} title={`Category ${i + 1}`} active={i === 3} />
            ))}
          </div>
        </div>
      </div>
      <hr className="h-[1px] w-full border-none bg-[var(--light-gray)]" />
    </nav>
  );
}
