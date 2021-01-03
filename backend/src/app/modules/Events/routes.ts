import { Router } from 'express'

import { EventController } from './controller'

const router = Router()
const controller = new EventController()

router.get('/:id', controller.getOne.bind(controller))
router.get('/', controller.getAllEvents.bind(controller))
router.post('/', controller.ValidateEventData.bind(controller), controller.createEvents.bind(controller))
router.patch('/:id', controller.ValidateEventData.bind(controller), controller.updateEvent.bind(controller))
router.delete('/:id', controller.deleteEvent.bind(controller))

export { router as EventRoutes }
