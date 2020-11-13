import { Application } from 'express';

import { AuthenticationRoutes, UserRoutes } from '../modules';
// Api Version 1
export const routesConfig = (app: Application): void => {
  app.use('/api/v1/auth', AuthenticationRoutes);
  app.use('/api/v1/users', UserRoutes);
};
