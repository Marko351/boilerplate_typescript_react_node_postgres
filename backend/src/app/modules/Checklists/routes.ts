import { Router } from 'express'

import { ChecklistController } from './controller'

const router = Router()
const controller = new ChecklistController()

router.post('/', controller.ValidateChecklistData.bind(controller), controller.createChecklists.bind(controller))
router.patch('/:id', controller.ValidateChecklistData.bind(controller), controller.updateChecklist.bind(controller))
router.delete('/:id', controller.deleteChecklist.bind(controller))

export { router as ChecklistRoutes }
