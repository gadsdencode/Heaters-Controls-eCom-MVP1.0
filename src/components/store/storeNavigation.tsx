import React from "react";
import StoreNavbar from './storeNavbar.tsx';
import UpperNavbar from './upperNavbar.tsx';

export default function StoreNavigation() {

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-none flex-wrap top-0 px-0 py-0">
        <UpperNavbar />
        <StoreNavbar />
        <hr className="horizontal w-100 my-0 dark" />
      </nav>
    </>
  );
};