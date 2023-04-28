import { FC, ReactNode } from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
