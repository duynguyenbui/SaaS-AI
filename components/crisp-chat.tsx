'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';
export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('367197c2-67d3-4318-9fe5-ffbbeb716761');
  }, []);
  return null;
};
