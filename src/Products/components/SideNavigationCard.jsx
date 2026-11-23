import React from "react";
import { Users, Activity, Calendar, Settings, Home, LogOut, Stethoscope } from "lucide-react";

const ICON_MAP = {
  Home,
  Users,
  Activity,
  Calendar,
  Settings,
};

const SideNavigationCard = ({ brand, navigation, user }) => (
  <aside
    className="hidden lg:flex flex-col justify-between bg-neutral-900 text-[#e5e4e2] rounded-[2rem] p-6 shadow-2xl font-['Comfortaa'] sticky top-6"
    style={{ width: "15vw", minWidth: "14rem", height: "calc(100vh - 3rem)" }}
  >
    <div>
      {/* Brand Header */}
      <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
        <div className="p-2.5 rounded-xl bg-[#536878]/20 text-[#536878]">
          <Stethoscope className="size-6 shrink-0" />
        </div>
        <div>
          <span className="font-bold text-base tracking-wider block text-white">{brand.name}</span>
          <span className="text-[10px] text-slate-400 font-medium">{brand.suite}</span>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-col gap-2">
        {navigation.map((item) => {
          const IconComponent = ICON_MAP[item.icon] || Home;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-xl font-medium text-sm transition-all ${
                  item.active
                    ? "bg-[#536878]/20 text-white"
                    : "hover:bg-white/5 text-slate-300 hover:text-white"
                }`}
              >
                <IconComponent className="size-4 text-[#536878]" />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    {/* Sidebar User Footer */}
    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-3 min-w-0">
        <div className="avatar shrink-0">
          <div className="w-9 rounded-full ring-2 ring-[#536878]">
            <img src={user.avatar} alt={user.name} />
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="text-xs font-bold text-white truncate">{user.name}</p>
          <p className="text-[10px] text-slate-400 truncate">{user.role}</p>
        </div>
      </div>
      <button
        aria-label="Logout"
        className="text-rose-400 hover:bg-rose-500/10 p-2 rounded-xl transition-colors cursor-pointer shrink-0"
      >
        <LogOut className="size-4" />
      </button>
    </div>
  </aside>
);

export default SideNavigationCard;