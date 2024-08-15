'use client';

import React, { useEffect } from 'react';
import { useToast } from '@/hooks/useToastfy';
import Button from '../../components/Button/Button';
import IconSVG from '../../assets/svg/svg-login/IconeSVG.svg';

export default function Login() {
  const { error } = useToast();

  useEffect(() => {
    error('Erro ocorreu');
  }, [error]);

  return (
    <main className="h-screen w-screen flex flex-col lg:flex-row">
      {/* Left side */}
      <div className="hidden lg:flex lg:flex-col items-center justify-center w-full lg:w-1/2 relative">
        <div className="flex flex-col items-center justify-between text-white mb-24 gap-4">
          <h2 className="text-xl font-bold">Welcome to</h2>
          <IconSVG className="ml-3 w-28 h-28" />
          <h1 className="text-3xl font-bold">CORTEX</h1>
          <p className="mt-2">Your journey starts here</p>
        </div>
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white">
          © 2024 Cortex. All rights reserved.
        </p>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 lg:p-8">
        <div className="hidden sm:flex pb-6">
          <h1 className="text-center text-2xl font-semibold text-primary-main">
            Login to Your Account
          </h1>
        </div>

        <div className="w-full max-w-sm p-6">
          <form className="hidden sm:flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Usuário ou E-mail"
                className="input w-full border-b-2 border-b-primary-main p-2 hover:bg-primary-light"
              />
              <input
                type="password"
                placeholder="Senha"
                className="input w-full border-b-2 border-b-primary-main p-2 hover:bg-primary-light"
              />
            </div>
            <p className="text-primary-dark cursor-pointer mb-6 underline hover:text-primary-main">
              I lost my password?
            </p>
            <Button>Acessar</Button>
          </form>
        </div>
      </div>

      {/*mobile*/}

      <form className="relative sm:hidden flex flex-col items-center justify-center h-full gap-4">
        <div className=''>
        <IconSVG className="ml-3 w-28 h-28" />
        <h1 className="text-primary-light text-4xl font-semibold">Cortex</h1>
        </div>
        <div className="flex flex-col w-3/5 gap-4 pt-36">
        <h2 className='text-center text-primary-dark font-semibold text-opacity-80'>Login to Your Account</h2>
          <input
            type="text"
            placeholder="Usuário ou E-mail"
            className="input w-full border-b-2 border-b-primary-main p-2 hover:bg-primary-light"
          />
          <input
            type="password"
            placeholder="Senha"
            className="input w-full border-b-2 border-b-primary-main p-2 hover:bg-primary-light"
          />
        </div>
        <p className="text-primary-dark cursor-pointer mb-6 underline hover:text-primary-main">
          I lost my password?
        </p>
        <div className="w-3/5">
          <Button>Acessar</Button>
        </div>
      </form>
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-primary-main text-center w-full">
        © 2024 Cortex. All rights reserved.
      </p>
    </main>
  );
}
