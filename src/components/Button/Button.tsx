import React, { ComponentType, ReactNode } from 'react';

type IconeProps = {
  height: string;
  width: string;
  className: string;
};

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  typeButton?:
    | 'fill'
    | 'fill_main'
    | 'fill_dark'
    | 'fill_darker'
    | 'outline'
    | 'text'
    | 'disabled';
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'square';
  type?: 'submit' | 'button' | undefined;
  Icone?: ComponentType<IconeProps>;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  title?: string;
};

export default function Button({
  typeButton = 'fill',
  disabled = false,
  size = 'medium',
  type = 'button',
  className,
  children,
  onClick,
  title,
  Icone,
}: ButtonProps) {
  const isDisabled = typeButton === 'disabled' || disabled;

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      disabled={disabled}
      title={title}
      className={`${
        {
          tiny: 'btn btn-xs',
          small: 'btn btn-sm',
          medium: 'btn',
          large: 'btn btn-lg',
          square: 'btn btn-square',
        }[size]
      }
        ${
          {
            fill:
            'bg-primary-lighter text-primary-darker hover:bg-primary-lighter border border-primary-darker hover:border-primary-darker hover:scale-98 transition-all',
            fill_main:
              'bg-primary-dark text-primary-light hover:bg-secondary-main hover:text-secondary-dark hover:scale-98 transition-all',
            fill_dark:
              'bg-primary-dark text-primary-light hover:bg-primary-dark hover:text-primary-light hover:scale-98 transition-all',
            fill_darker:
              'bg-primary-darker text-primary-light hover:bg-primary-darker hover:text-primary-light hover:scale-98 transition-all',
            outline:
              'border bg-transparent border-gray-500 text-gray-600 hover:bg-gray-900 hover:text-white shadow-sm shadow-gray-500 hover:shadow-gray-600',
            text:
              'bg-transparent hover:bg-gray-50 text-gray-800',
            disabled:
              'cursor-not-allowed opacity-50 disabled:fill-gray-darker',
          }[typeButton]
        }
        rounded-md ${className}
      `}
    >
      {Icone ? (
        <Icone
          height="20"
          width="20"
          className={``}
        />
      ) : (
        ''
      )}
      {children}
    </button>
  );
}
