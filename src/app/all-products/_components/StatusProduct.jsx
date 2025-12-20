import React from 'react';

export const COLOR_STATUS = {
  HOT: '#ECB159',
  AVAILABLE: '#5a7863',
  SALE: '#d32f2f',
  SOLD_OUT: '#3b4953',
};
export default function StatusProduct({ status = '' }) {
  return (
    <div
      style={{
        background: COLOR_STATUS[status],
      }}
      className="absolute top-[8px] right-[8px] z-10 rounded-[4px] px-[8px] py-[2px]"
    >
      <strong className="text-[12px] text-[var(--white-color)]">{status}</strong>
    </div>
  );
}
