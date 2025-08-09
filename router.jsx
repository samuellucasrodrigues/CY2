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
import { Series } from "./routes/Series.jsx";
import { Animation } from "./routes/Animation.jsx";

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

const seriesRoute = createRoute({
  path: "/series",
  getParentRoute: () => rootRoute,
  component: Series,
});

const animationRoute = createRoute({
  path: "/animations",
  getParentRoute: () => rootRoute,
  component: Animation,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute,signupRoute,seriesRoute,animationRoute]);

export const router = createRouter({ routeTree });

export default RouterProvider;
