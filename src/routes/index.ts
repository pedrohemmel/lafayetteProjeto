import { Router } from 'express'
import * as homeController from '../controllers/homeController'

const router = Router()
router.get('/',homeController.inicial);
router.get('/:slug',homeController.slug)



export default router