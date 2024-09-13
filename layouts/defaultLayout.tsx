"use client";

import React, { useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> =
  function DefaultLayoutComponent({ children }) {
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    return (
      <div className="w-full min-h-screen">
        {isLoading ? (
          <SplashScreen callback={() => setIsLoading(false)} />
        ) : (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl md:pt-16 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        )}
      </div>
    );
  };

export default DefaultLayout;
