import React from 'react';

export default function Button({ onClick, text = '' }) {
  return (
    <span
      className="cursor-pointer rounded-[4px] border-[1px] border-[var(--light-background)] bg-[var(--light-background)] px-[24px] py-[6px] transition-all duration-200 ease-in-out hover:border-[var(--primary-color)] hover:[box-shadow:var(--shadow-item)]"
      onClick={onClick}
    >
      {text}
    </span>
  );
}
