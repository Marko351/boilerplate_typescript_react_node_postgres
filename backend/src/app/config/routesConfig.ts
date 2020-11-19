import { Application } from 'express'

import { AuthenticationRoutes, UserRoutes, TaskRoutes, EventRoutes } from '../modules'
import { isAuthenticated } from '../helpers/isAuth'
// Api Version 1
export const routesConfig = (app: Application): void => {
  app.use('/api/v1/auth', AuthenticationRoutes)
  app.use('/api/v1/users', UserRoutes)
  app.use('/api/v1/tasks', isAuthenticated, TaskRoutes)
  app.use('/api/v1/events', isAuthenticated, EventRoutes)
}
