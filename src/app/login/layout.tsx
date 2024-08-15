// app/login/layout.tsx ou src/app/login/layout.tsx

import React from 'react';

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-login-mobile sm-bg:bg-login-tablet lg-bg:bg-login-desktop bg-cover bg-center">
      {children}
    </div>
  );
};

export default LoginLayout;
