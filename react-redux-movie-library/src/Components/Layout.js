// src/Components/Layout.jsx
import React from 'react';
import SideBar from './SideBar';

const Layout = ({ children }) => (
  <div className="layout">
    <SideBar />
    <div className="content">
      {children}
    </div>
  </div>
);

export default Layout;
