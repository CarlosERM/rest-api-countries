import { useState, useEffect, useRef } from 'react';

export default function handleOutsideClick(initialShow: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(initialShow);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, show, setShow };
}
