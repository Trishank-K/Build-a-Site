import React from "react";
import Navigation from "@/components/site/Navigation";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="h-full">
    <Navigation/>
    {children}
    </main>;
};

export default AuthLayout;
