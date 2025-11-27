import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboardIcon,
  WarehouseIcon,
  Wallet2Icon,
  UserStarIcon,
  BanknoteArrowUpIcon,
  UserIcon,
} from "lucide-react";

export function Sidebar() {
  const [active, setActive] = useState(); // Pode remover se não estiver usando
  const location = useLocation();

  const menus = [
    { name: "Dashboard", icon: LayoutDashboardIcon, path: "/dashboard" },
    { name: "Clientes", icon: UserStarIcon, path: "/clientes" },
    { name: "Estoque", icon: WarehouseIcon, path: "/estoque" },
    { name: "Vendas", icon: Wallet2Icon, path: "/vendas" },
    { name: "Faturamento", icon: BanknoteArrowUpIcon, path: "/faturamento" },
    { name: "Contas", icon: UserIcon, path: "/contas" },
  ];

  // Cores (Usadas apenas para lógica interna)
  const sidebarColor = "bg-zinc-900";
  const shadowColorHex = "#27272a"; // zinc-800

  return (
    <aside
      className={`w-56 ${sidebarColor} py-10 flex flex-col z-10 relative h-full`}
    >
      {" "}
      {/* Adicione h-full se precisar */}
      <div className="px-8 mb-10 text-white font-bold text-xl">AutoTop ERP</div>
      <ul>
        {menus.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <li key={item.name} className="relative">
              {/* Curva Superior */}
              <div
                className={`absolute right-0 -top-12 w-12 h-12 z-20 pointer-events-none transition-all duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-50" : "opacity-0 scale-0"
                }`}
                style={{
                  borderRadius: "0 0 100% 0",
                  boxShadow: `30px 30px 0 24px ${shadowColorHex}`,
                  transformOrigin: "bottom right",
                }}
              />

              {/* --- O BOTÃO --- */}

              <Link
                to={item.path}
                onClick={() => setActive(item.name)}
                className={`relative flex w-full items-center gap-4 px-8 h-14 transition-all duration-300 ease-in-out z-10
                    ${isActive
                      ? `bg-zinc-800 text-white font-bold rounded-l-[50px] ml-4 w-[calc(100%-16px)] border-l-4 border-red-500`
                      : "text-zinc-400 hover:text-white"}`}>
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>

              {/* -- CURVA INFERIOR -- */}

              <div
                className={`absolute right-0 -bottom-12 w-12 h-12 z-20 pointer-events-none transition-all duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-50" : "opacity-0 scale-0"
                }`}
                style={{
                  borderRadius: "0 100% 0 0", 
                  boxShadow: `30px -30px 0 24px ${shadowColorHex}`, transformOrigin: "top right",
                }}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
