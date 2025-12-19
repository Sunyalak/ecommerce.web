import { useEffect } from 'react';

export function useOnClose(refItem, action) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refItem.current && !refItem.current.contains(e.target)) {
        action(e);
      }
    };

    const handlePressEsc = (e) => {
      if (e.code === 'Escape') {
        action(e);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handlePressEsc);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handlePressEsc);
    };
  }, [refItem, action]);
}
