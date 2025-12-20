'use client';
import React, { useState } from 'react';
import CardProductDetail from './CardProductDetail';
import Button from '@/app/_components/Tools/Button';

export default function ListProducts() {
  const [length, setLength] = useState(100);
  const [showList, setShowList] = useState(15);
  return (
    <div className="flex h-auto w-full flex-col gap-[16px]">
      <p className="text-end font-semibold text-[var(--primary-color)]">{`1500 Products`}</p>
      <div className="flex-grow overflow-hidden rounded-[8px] bg-[#fbfff6] p-[16px]">
        <div className="h-full w-full overflow-auto">
          <div className="grid grid-cols-3 gap-[16px]">
            {Array.from({ length: length })
              .slice(0, showList)
              .map((item, index) => (
                <CardProductDetail
                  key={index}
                  discount={index % 7 === 0 ? 20 : 0}
                  status={index % 7 === 0 ? 'SALE' : ''}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[32px] px-[16px] pb-[6px]">
        <hr className="my-[16px] h-[1px] flex-grow border-none bg-[var(--light-background)]" />
        {length > showList && <Button onClick={() => setShowList((prev) => prev + 15)} text="Show More ..." />}
      </div>
    </div>
  );
}
