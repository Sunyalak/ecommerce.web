import React from 'react';
import { AngleDownIcon } from '../../../public/icons/icon-svg';

export default function CategoryItem({ title = 'CategoryItem', active = false }) {
  return (
    <div
      className={`flex w-[fit-content] min-w-[fit-content] cursor-pointer items-center gap-[8px] rounded-[16px] px-[16px] py-[8px] font-bold ${active ? 'bg-[var(--primary-color)] text-[var(--white-color)]' : 'bg-[var(--light-gray)] text-[var(--secondary-color)]'} transition-all duration-100 ease-in-out hover:bg-[var(--primary-color)] hover:text-[var(--white-color)]`}
    >
      <span>{title}</span>
      <AngleDownIcon className="h-5 w-5 text-[var(--primary-colo)]" />
    </div>
  );
}
