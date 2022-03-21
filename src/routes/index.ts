import { Router } from 'express'
import * as homeController from '../controllers/homeController'

const router = Router()
router.get('/',homeController.home);
router.get('/:slug',homeController.slug)

export default router