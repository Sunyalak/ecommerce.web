import React from 'react';

export default function PriceText({
  price = 150000,
  discount = 0,
  discountText = 'ราคาโปรโมชั่นตั้งแต่วันที 12 Dec 2025 - 15 Dec 2025 หรือจนกว่าสินค้าจะหมด',
}) {
  const calculateDiscount = () => {
    const discountAmount = (price * discount) / 100;
    return { newPrice: Math.round(price - discountAmount), discountAmount };
  };
  return (
    <div className="flex flex-col">
      {discount ? (
        <>
          <strong className="[font-size:12px] text-[var(--text-body)] [text-decoration:line-through]">
            {price.toLocaleString()}
          </strong>
          <div>
            <div className="text-[var(--red-dark-color)]">
              <strong className="[font-size:var(--h3-font-size)]">
                {`${calculateDiscount().newPrice.toLocaleString()} `}
              </strong>
              <strong>{` ฿`}</strong>
            </div>
            <p className="[text-decoration: line-through] text-[var(--red-dark-color)]">{`Discount ${discount}% Save Off ${calculateDiscount().discountAmount.toLocaleString()} ฿`}</p>
            <p className="text-[12px] text-[var(--secondary-color)]">{`* ${discountText}`}</p>
          </div>
        </>
      ) : (
        <>
          <div className="text-[var(--primary-color)]">
            <strong className="[font-size:var(--h3-font-size)]">{`${price.toLocaleString()} `}</strong>
            <strong>{` ฿`}</strong>
          </div>
        </>
      )}
    </div>
  );
}
