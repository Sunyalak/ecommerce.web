import React from 'react';
import { EmailIcon, PhoneIcon, PinIcon, WhatAppsIcon } from '../../../public/icons/icon-svg';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '../../../public/images/images';

export default function FooterSection() {
  return (
    <footer className="relative mt-[50px] h-[auto] w-full bg-[var(--primary-color)] text-[var(--white-color)]">
      <div className="container mx-auto z-[1] relative">
        <div className="flex gap-[50px] py-[50px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="[font-size:var(--h1-font-size)] font-bold">{'Ecommerce.Web'}</h2>
            <div className="flex flex-grow flex-col gap-[8px]">
              <strong>{'Contact Us'}</strong>
              <figure className="flex gap-[8px]">
                <WhatAppsIcon className="h-5 w-5 text-[var(--white-color)]" />
                <figcaption className="flex flex-col">
                  <span>{'Whats App'}</span>
                  <Link href="tel:+12 123-456-789" className="hover:text-[var(--text-body)]">
                    <span>{'+12 123-456-789'}</span>
                  </Link>
                </figcaption>
              </figure>

              <figure className="flex gap-[8px]">
                <PhoneIcon className="h-5 w-5 text-[var(--white-color)]" />
                <figcaption className="flex flex-col">
                  <span>{'Call'}</span>
                  <Link href="tel:+12 123-456-789" className="hover:text-[var(--text-body)]">
                    <span>{'+12 123-456-789'}</span>
                  </Link>
                </figcaption>
              </figure>

              <figure className="flex gap-[8px]">
                <EmailIcon className="h-5 w-5 text-[var(--white-color)]" />
                <figcaption className="flex flex-col">
                  <span>{'Email'}</span>
                  <Link href="mailto:+12 123-456-789" className="hover:text-[var(--text-body)]">
                    <span>{'ecommerce.web@example.com'}</span>
                  </Link>
                </figcaption>
              </figure>

              <figure className="flex gap-[8px]">
                <PinIcon className="h-5 w-5 text-[var(--white-color)]" />
                <figcaption className="flex flex-col">
                  <span>{'Address'}</span>
                  <span>{'123, Main Street, City, Country'}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="flex flex-grow justify-evenly gap-[50px]">
            <div className="flex w-[fit-content] flex-col gap-[16px]">
              <strong className="block w-[fit-content] border-b-[2px] border-[var(--white-color)] py-[8px] [font-size:var(--h5-font-size)]">
                {'Most Popular Categories'}
              </strong>
              <ul className="flex list-disc flex-col gap-[16px] pl-[20px]">
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 1'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 2'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 3'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 4'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 5'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 6'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 7'}</Link>
                </li>{' '}
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Category 8'}</Link>
                </li>
              </ul>
            </div>

            <div className="flex w-[fit-content] flex-col gap-[16px]">
              <strong className="block w-[fit-content] border-b-[2px] border-[var(--white-color)] py-[8px] [font-size:var(--h5-font-size)]">
                {'Customer Services'}
              </strong>
              <ul className="flex list-disc flex-col gap-[16px] pl-[20px]">
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'About Us'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Team & Conditions'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'FAQ'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Privacy Policy'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'E-waste Policy'}</Link>
                </li>
                <li className="hover:text-[var(--text-body)]">
                  <Link href="#">{'Cancellation & Return Policy'}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="h-[1px] w-full border-none bg-[var(--secondary-color)]" />
        <div className="p-[16px] text-center">{`© ${new Date().getFullYear()} Ecommerce.Web. All rights reserved.`}</div>
      </div>
      <figure className="absolute bottom-0 right-0 opacity-[0.2] w-[800px] aspect-square z-[0]">
        <Image src={IMAGES.BG_FOOTER} alt="BG-Footer" />
      </figure>
    </footer>
  );
}
