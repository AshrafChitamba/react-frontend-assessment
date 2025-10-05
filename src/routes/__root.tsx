import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components";
import { SideNav } from "../components/SideNav";

const RootLayout = () => (
  <main className="flex">
    <SideNav />
    <div className="flex-1">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  </main>
);

export const Route = createRootRoute({ component: RootLayout });
