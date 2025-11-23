import { LayoutDashboardIcon, WarehouseIcon, Wallet2Icon, UserStarIcon, BanknoteArrowUpIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { Dashboard } from "../../pages/Dashboard";

export function SidebarEfeito() {
  const [active, setActive] = useState("Dashboard");

  const menus = [
    { name: "Dashboard", icon: LayoutDashboardIcon },
    { name: "Clientes", icon: UserStarIcon },
    { name: "Estoque", icon: WarehouseIcon },
    { name: "Vendas", icon: Wallet2Icon },
    { name: "Faturamento", icon: BanknoteArrowUpIcon },
    { name: "Contas", icon: UserIcon},
  ];

  // DEFINA AS CORES AQUI PARA NÃO ERRAR
  const bgColor = "bg-gray-100"; // Cor do Fundo Principal
  const sidebarColor = "bg-zinc-900"; // Cor da Sidebar
  const shadowColorHex = "#f3f4f6"; // O Hexadecimal exato do bg-gray-100

  return (
    // fundo geral é cinza
    <div className={`flex h-screen w-full ${bgColor} font-sans`}>
      {/* --- SIDEBAR --- */}
      <aside className={`w-56 ${sidebarColor} py-10 flex flex-col z-10 relative `}>
        <div className="px-8 mb-10 text-white font-bold text-xl">AutoTop ERP</div>

        <ul>
          {menus.map((item) => {
            const isActive = active === item.name;

            return (
              <li key={item.name} className="relative">
                {/* -- CURVA SUPERIOR -- */}
                <div
                  className={`absolute right-0 -top-12 w-12 h-12 z-20 pointer-events-none transition-all duration-300 ease-in-out ${
                    isActive ? 'opacity-100 scale-50' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    borderRadius: "0 0 100% 0",
                    boxShadow: `30px 30px 0 24px ${shadowColorHex}`,
                    transformOrigin: 'bottom right',
                  }}
                />

                {/* --- O BOTÃO --- */}
                <button
                  onClick={() => setActive(item.name)}
                  className={`
                    relative flex w-full items-center gap-4 px-8 h-14 
                    transition-all duration-300 ease-in-out z-10
                    
                    ${
                      isActive
                        ? `${bgColor} text-zinc-900 font-bold rounded-l-[50px] ml-4 w-[calc(100%-16px)]`
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>

                {/* -- CURVA INFERIOR -- */}
                <div
                  className={`absolute right-0 -bottom-12 w-12 h-12 z-20 pointer-events-none transition-all duration-300 ease-in-out ${
                    isActive ? 'opacity-100 scale-50' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    borderRadius: "0 100% 0 0",
                    boxShadow: `30px -30px 0 24px ${shadowColorHex}`,
                    transformOrigin: 'top right',
                  }}
                />
              </li>
            );
          })}
        </ul>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-10">
        <Dashboard/>
      </main>
    </div>
  );
}
