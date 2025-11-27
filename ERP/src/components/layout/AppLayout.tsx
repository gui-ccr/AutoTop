import { Outlet } from "react-router-dom";

import { Sidebar } from "./SideBar";

export function AppLayout() {
    return (
    <div className="flex h-screen w-full bg-zinc-800 font-sans">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* O Outlet é onde as páginas filhas (Dashboard, Estoque) vão aparecer */}
        <Outlet />
      </main>
    </div>
  );
}