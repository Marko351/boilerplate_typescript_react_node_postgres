import { Router } from 'express';

import { AuthenticationController } from './controller';

const router = Router();
const controller = new AuthenticationController();

router.post('/login', controller.login.bind(controller));

export { router as AuthenticationRoutes };
