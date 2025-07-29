import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  Outlet,
} from '@tanstack/react-router'

import { Home } from './routes/Home.jsx'
import { Login } from './routes/Login.jsx'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const homeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: Home,
})

const loginRoute = createRoute({
  path: '/login',
  getParentRoute: () => rootRoute,
  component: Login,
})

const routeTree = rootRoute.addChildren([homeRoute, loginRoute])

export const router = createRouter({ routeTree })

export default RouterProvider
