import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useRef } from 'react';
import { HomeIcon } from '../../../public/icons/icon-svg';
import { useOnClose } from '../../../utils/onClose-function';

export default function SideMenuBar({ activeSidMenu, setActiveSideMenu }) {
  const sideMenuRef = useRef();
  // ใช้ useCallback เพื่อป้องกันการสร้างฟังก์ชันใหม่ในทุก render
  const actionClose = useCallback(() => setActiveSideMenu(false), []);
  useOnClose(sideMenuRef, actionClose);
  return (
    <aside
      className={` ${activeSidMenu ? 'active-sid-menu pointer-events-auto left-0 w-full' : 'pointer-events-none left-[-50%] w-full'} fixed top-0 z-[999] h-[100vh] overflow-hidden text-[var(--light-gray)] transition-all duration-300 ease-in-out`}
    >
      <div
        ref={sideMenuRef}
        className="flex h-full w-[350px] flex-col gap-[16px] overflow-hidden rounded-tr-[4px] rounded-br-[4px] bg-[var(--background-sidebar)] p-[16px] [box-shadow:-3px_-1px_20px_#080b098c]"
      >
        <figure className="flex min-h-[fit-content] w-full items-center gap-[16px] overflow-hidden">
          <div className="relative h-[50px] min-h-[50px] w-[50px] min-w-[50px] overflow-hidden rounded-full border-[2px] border-[var(--gray-body)]">
            <Image
              className="overflow-hidden object-cover"
              fill
              src={`https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="image profile"
            />
          </div>
          <figcaption className="flex flex-grow flex-col justify-between overflow-hidden">
            <strong className="overflow-hidden text-[16px] text-ellipsis [white-space:nowrap]">
              {'Mr.Firstname Lastname'}
            </strong>
            <span className="overflow-hidden text-[12px] text-ellipsis [white-space:nowrap] text-[var(--gray-body)]">
              {'firstname.lastname@domain.com'}
            </span>
          </figcaption>
        </figure>
        <hr className="my-[4px] h-[1px] min-h-[1px] w-full border-none bg-[#ffffff0a]" />

        <div className="flex flex-grow flex-col gap-[16px] overflow-hidden">
          <div className="flex flex-col gap-[8px]">
            {/* <span className='text-[var(--gray-body)]'>{'Menu list'}</span> */}
            <ul className="flex flex-col gap-[2px]">
              {Array.from({ length: 6 }).map((menu, index) => (
                <li
                  className={`${index === 3 && 'bg-[#5a786363]'} w-full overflow-hidden rounded-[4px] p-[8px] hover:bg-[#5a786363]`}
                  key={index}
                >
                  <Link href="#" className="flex items-end gap-[8px]">
                    <HomeIcon className="min-h-6 min-w-6 text-[var(--light-gray)]" />
                    <span className="overflow-hidden text-ellipsis [white-space:nowrap]">{`Menu list ${index + 1}`}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-grow flex-col gap-[8px] overflow-hidden">
            <span className="text-[var(--gray-body)]">{'Most Popular Categories'}</span>
            <ul className="flex flex-grow flex-col gap-[2px] overflow-y-auto">
              {Array.from({ length: 30 }).map((menu, index) => (
                <li
                  className={`${index === 3 && 'bg-[#5a786363]'} min-h-[fit-content] w-full overflow-hidden rounded-[4px] p-[8px] hover:bg-[#5a786363]`}
                  key={index}
                >
                  <Link href="#" className="flex items-end gap-[8px]">
                    <HomeIcon className="min-h-6 min-w-6 text-[var(--light-gray)]" />
                    <span className="overflow-hidden text-ellipsis [white-space:nowrap]">{`Menu list ${index + 1}`}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
