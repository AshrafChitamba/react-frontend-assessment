import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

export const SideNav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => setShowLinks((prevState) => !prevState);

  return (
    <aside className="relative border-r h-auto md:min-h-screen min-w-[240px] bg-white">
      <div className="bg-black/90 text-white py-2.5 md:p-5 md:py-[0.66rem]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-sm md:text-2xl font-bold uppercase tracking-wide">
              tp
            </h1>
            <p className="text-[#797979] text-xs">Technician portal</p>
          </div>
          <div className="md:hidden">
            <Menu color="#f2f2f2" size={20} onClick={toggleLinks} />
          </div>
        </div>
      </div>

      <nav
        className={`absolute md:relative top-14 md:top-0 left-0 w-full min-h-screen bg-white ${showLinks ? "translate-x-0" : "-translate-x-full md:translate-x-0"} transition-transform`}
      >
        <ul className="px-4 md:px-0 pt-4 md:pt-0">
          <li>
            <Link
              to="/"
              className="block p-3 md:py-3.5 hover:bg-[#f9fafb] focus:bg-[#f9fafb] focus:outline-none focus:border-none transition-colors"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
