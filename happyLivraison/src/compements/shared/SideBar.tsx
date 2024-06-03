import React from "react";
import { FcHome } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { Link } from "react-router-dom";
const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-emerald-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
const SideBar = () => {
  return (
    <div className="flex flex-col w-60 p-3 bg-neutral-200">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcHome size={24} />
        <span className="text-lg py-2">Happy Livraison</span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((items) => (
          <SideBarLink
            key={items.key}
            label={items.label}
            path={items.label}
            icon={items.icon}
          ></SideBarLink>
        ))}
      </div>
      <div>bottom part</div>
    </div>
  );
};

function SideBarLink({
  label,
  path,
  icon,
}: {
  label: string;
  path: string;
  icon: React.ReactElement;
}) {
  return (
    <Link to={path} className={linkClass}>
      {/* on aura dedans l'icon et le dashboard */}
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
}

export default SideBar;
