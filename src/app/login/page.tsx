// Login.tsx
'use client';

import React, { useEffect } from 'react';
import { useToast } from '../../hooks/useToastfy'; // Ajuste o caminho conforme necessário

export default function Login() {
  const { success, error } = useToast();

  useEffect(() => {
    success('Uhull');
    error('Hum');
  }, [success, error]);

  return (
    <>
      <h1>Aqui</h1>
    </>
  );
}
