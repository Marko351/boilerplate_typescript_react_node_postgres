import { Router } from 'express';

import { AuthenticationController } from './controller';

const router = Router();
const controller = new AuthenticationController();

router.post(
  '/register',
  controller.ValidateAuth.bind(controller),
  controller.registerUser.bind(controller),
);
router.post('/login', controller.login.bind(controller));

export { router as AuthenticationRoutes };
