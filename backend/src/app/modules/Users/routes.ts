import { Router } from 'express';

import { UserController } from './controller';

const controller = new UserController();
const router = Router();

// router.post('/', controller.registerUser.bind(controller));

export { router as UserRoutes };
