'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import svgBackground from '@/assets/svg/svg-login/Login.svg';
import { useToast } from '@/hooks/useToastfy';

export default function Login() {
  const { error } = useToast();

  useEffect(() => {
    error('Erro ocorreu');
  }, [error]);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src={svgBackground}
        alt="background-image"
        layout="fill"
        className="object-cover"
      />
      
    </div>
  );
}
