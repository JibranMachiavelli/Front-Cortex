import React from 'react';

const DashBoardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default DashBoardLayout;
