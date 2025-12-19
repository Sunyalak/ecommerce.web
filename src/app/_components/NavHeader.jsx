'use client';
import { useState } from 'react';
import { CartIcon, UserIcon } from '../../../public/icons/icon-svg';
import SearchNav from './SearchNav';
import SideMenuBar from './SideMenuBar';

export default function NavHeader() {
  const [activeSidMenu, setActiveSideMenu] = useState(false);
  return (
    <>
      <SideMenuBar activeSidMenu={activeSidMenu} setActiveSideMenu={setActiveSideMenu} />
      <nav>
        <div className="py-[16px]">
          <div className="container mx-auto flex w-full items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <div className="hamburger-menu" onClick={() => setActiveSideMenu(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h1 className="[font-size:var(--h2-font-size)] font-bold text-[var(--primary-color)]">
                {'Ecommerce.web'}
              </h1>
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
      </nav>
    </>
  );
}
