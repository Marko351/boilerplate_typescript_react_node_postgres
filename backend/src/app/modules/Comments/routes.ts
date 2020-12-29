import { Router } from 'express'

import { CommentsController } from './controller'

const router = Router()
const controller = new CommentsController()

router.get('/', controller.getAllComments.bind(controller))
router.post('/', controller.ValidateCommentsData.bind(controller), controller.createComments.bind(controller))
router.patch('/:id', controller.ValidateCommentsData.bind(controller), controller.updateComments.bind(controller))
router.delete('/:id', controller.deleteComments.bind(controller))

export { router as CommentRoutes }
