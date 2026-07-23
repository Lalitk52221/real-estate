import type { ReactNode } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Right Side */}

      <div className="flex flex-1 flex-col">

        <Header/>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

    </div>
  );
}