'use client';

import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import IconSVG from '../../assets/svg/svg-login/IconeSVG.svg';
import { error, success, warning } from '../../utils/toastfy';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

export default function Login() {
  useEffect(() => {
    error('Erro ocorreu');
    success('Erro ocorreu');
    warning('Erro ocorreu');
  }, []);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <main className="h-screen w-screen flex flex-col sm:flex-row animate-slideInOpacity">
      <div className="hidden sm:flex sm:flex-col items-center justify-center w-full sm:w-1/2 relative">
        <div className="flex flex-col items-center justify-between text-white mb-24 gap-4">
          <IconSVG className="h-28 pl-12 pt-1 w-full" />
          <h1 className="text-4xl font-bold">CORTEX</h1>
          <p className="mt-2 text-secondary-light">Sua jornada começa aqui.</p>
        </div>
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white">
          © 2024 Cortex. Todos os direitos reservados.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-2 lg:p-8 pt-52 sm:pt-0">
        <div className="flex flex-col items-center justify-center gap-3">
          <IconSVG className="sm:hidden h-28 pl-[13.6vh] pt-1 w-full" />
          <h1 className="sm:hidden text-4xl font-bold text-primary-light">CORTEX</h1>
          <h1 className="text-center text-3xl font-semibold text-secondary-main pb-3 pt-36 sm:pt-0">
            Faça login em sua conta.
          </h1>
          <p className="text-gray-dark text-xl">Seja bem-vindo, novamente!</p>
        </div>

        <div className="w-full max-w-sm p-7">
          <form
            onSubmit={() => console.log('foi')}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 relative">
              <input
                type="text"
                placeholder="Usuário ou E-mail"
                className="input w-full border-b-2 border-b-primary-main p-2 hover:bg-primary-light"
              />

              <div className="relative w-full">
                <input
                  type={isVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Senha"
                  className="input w-full border-b-2 border-b-primary-main p-2 hover:bg-primary-light"
                />
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-main focus:outline-none"
                >
                  {isVisible ? (
                    <IoIosEyeOff className="w-5 h-5" />
                  ) : (
                    <IoIosEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-primary-dark cursor-pointer mb-5 underline hover:text-primary-main">
              Esqueceu sua senha?
            </p>

            <Button
              type="submit"
              typeButton="fill_dark"
              className="glass"
            >
              Acessar
            </Button>
          </form>
        </div>
      </div>
      <p className="sm:hidden absolute bottom-4 left-1/3 transform -translate-x-[18%] text-xs text-primary-dark">
        © 2024 Cortex. Todos os direitos reservados.
      </p>
    </main>
  );
}
