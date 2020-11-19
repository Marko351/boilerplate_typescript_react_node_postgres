import { Router } from 'express'

import { TaskController } from './controller'

const router = Router()
const controller = new TaskController()

router.get('/:id', controller.getOne.bind(controller))
router.post('/', controller.ValidateTaskData.bind(controller), controller.createTasks.bind(controller))
router.patch('/:id', controller.ValidateTaskData.bind(controller), controller.updateTask.bind(controller))
router.delete('/:id', controller.deleteTask.bind(controller))

export { router as TaskRoutes }
