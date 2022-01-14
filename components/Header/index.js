import { LaptopHeader } from './laptopHeader';
import { HeaderMobile } from './mobileHeader';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useEffect } from 'react';

export default function Header() {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  }, []);
  return <>{useMobile().isMobile ? <HeaderMobile /> : <LaptopHeader />}</>;
}
