import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  Outlet,
} from "@tanstack/react-router";

import { Home } from "./routes/Home.jsx";
import { Login } from "./routes/Login.jsx";
import { SignUp } from "./routes/SignUp.jsx";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: Home,
});

const loginRoute = createRoute({
  path: "/login",
  getParentRoute: () => rootRoute,
  component: Login,
});

const signupRoute = createRoute({
  path: "/signup",
  getParentRoute: () => rootRoute,
  component: SignUp,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute,signupRoute]);

export const router = createRouter({ routeTree });

export default RouterProvider;
