import React, { ReactNode } from 'react';

// Defina a tipagem para as props do botão
interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="btn glass w-full py-2 px-4 bg-primary-dark text-white rounded-lg hover:bg-primary-main">
      {children}
    </button>
  );
}
