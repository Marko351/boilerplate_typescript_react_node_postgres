import { Router } from 'express'

import { AuthenticationController } from './controller'

const router = Router()
const controller = new AuthenticationController()

router.post('/register', controller.ValidateAuthRegister.bind(controller), controller.registerUser.bind(controller))
router.post('/login', controller.ValidateAuthLogin.bind(controller), controller.login.bind(controller))

export { router as AuthenticationRoutes }
