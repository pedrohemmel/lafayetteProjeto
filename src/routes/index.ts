import { Router } from 'express'
import * as homeController from '../controllers/homeController'

const router = Router()
router.get('/',homeController.inicial);
router.get('/:slug',homeController.slug)
router.get('/teams/:slug',homeController.teams)
router.get('/portal/:slug',homeController.portal)
router.get('/galery/:slug',homeController.galery)


export default router