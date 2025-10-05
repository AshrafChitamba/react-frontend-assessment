import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const Header = () => {
  const { pathname } = useLocation();

  const formatBreadcrumb = (pathname: string) => {
    const formattedPath = pathname.replace("/", "").replace("-", " ");
    return formattedPath;
  };

  return (
    <header className="border-b border-t-4 border-t-[var(--color-gray-300)] bg-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#f9fafb] text-xl p-2.5 rounded-full font-medium">
            AC
          </span>
          <div className="flex flex-col items-start justify-center">
            <span className="font-medium text-[0.92rem]">Ashraf Chitambaa</span>
            <span className="text-[#627084] text-sm">admin</span>
          </div>
        </div>
      </div>
      <div className="border-t container mx-auto px-4 py-3.5">
        <div className="flex items-center gap-1">
          <Link to="/" className="text-[#797979d3]">
            Dashboard
          </Link>
          <ChevronRight color="#797979d3" size={20} />
          <Link to={pathname} className="capitalize">
            {formatBreadcrumb(pathname)}
          </Link>
        </div>
      </div>
    </header>
  );
};
