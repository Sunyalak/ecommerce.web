'use client';
import React, { useState } from 'react';
import { ListIcon, SearchIcon } from '../../../public/icons/icon-svg';

export default function SearchNav({ value = '' }) {
  const [search, setSearch] = useState(value || '');
  return (
    <div className="flex w-full items-center gap-[8px] rounded-[8px] bg-[var(--light-gray)] px-[16px] py-[8px]">
      <label htmlFor='searchInput'>
        <SearchIcon className="h-5 w-5 text-[var(--secondary-color)]" />
      </label>
      <div className="flex-grow">
        <input type="text" id="searchInput" placeholder="Search Products and more..." value={search} onChange={(e) => setSearch(e.target.value)} 
        className='w-full'/>
      </div>
      <div className="cursor-pointer">
        <ListIcon className="h-7 w-7 text-[var(--secondary-color)] hover:text-[var(--primary-color)]" />
      </div>
    </div>
  );
}
