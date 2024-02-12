import React from "react";
import VNavbar from "./component/navbar/Navbar";
import FooterPage from "./component/footer/FooterPage";
export default function MainLayout({ children }: any) {
  return (
    <div>
      <VNavbar />
      {children}
      <FooterPage />
    </div>
  );
}
