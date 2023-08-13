'use client';

import { useEffect, useState } from 'react';
import ProModal from './pro-modal';

const ModalProvider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <ProModal />
    </>
  );
};

export default ModalProvider;
