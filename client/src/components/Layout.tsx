import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <h1>Ich bin der Layout</h1>
      {children}
    </>
  );
};

export default Layout;
