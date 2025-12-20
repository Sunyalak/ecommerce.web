import React from 'react';
import ListProducts from './_components/ListProducts';

export default function PageAllProducts() {
  return (
    <section className="flex h-full w-full flex-col pt-[16px]">
      <div className="container mx-auto">
        <hgroup>
          <h2 className="[font-size:var(--h3-font-size)] font-bold text-[var(--primary-color)]">{'ALL PRODUCTS '}</h2>
          {/* <h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis qui vitae, voluptates odit possimus
            voluptatem.
          </h5> */}
        </hgroup>

        <section className="relative mt-[16px] flex max-h-[1500px] w-full flex-grow overflow-hidden">
          <div className="sticky top-0 left-0 w-[260px] min-w-[260px]">
            <ul>
              {Array.from({ length: 10 }).map((item, index) => (
                <li key={index}>
                  <span>Category</span>
                </li>
              ))}
            </ul>
          </div>
          <ListProducts />
        </section>
      </div>
    </section>
  );
}
