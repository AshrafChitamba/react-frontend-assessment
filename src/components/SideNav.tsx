import { Link } from "@tanstack/react-router";

export const SideNav = () => {
  return (
    <aside className="border-r h-screen bg-white">
      <div className="bg-black/90 text-white px-5 pt-6 pb-16">
        <h1 className="text-4xl font-bold text-center uppercase">
          Technician <br /> Portal
        </h1>
      </div>

      <nav>
        <Link to="/">Dashboard</Link>
      </nav>
    </aside>
  );
};
