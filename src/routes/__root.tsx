import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components";
import { SideNav } from "../components/SideNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const RootLayout = () => (
  <main className="flex flex-col md:flex-row gap-0">
    <SideNav />
    <div className="flex-1">
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </div>
  </main>
);

export const Route = createRootRoute({ component: RootLayout });
