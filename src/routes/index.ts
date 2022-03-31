import { Router } from 'express'
import * as homeController from '../controllers/homeController'

const router = Router()
router.get('/',homeController.inicial);
router.get('/home',homeController.home);
router.get('/:slug',homeController.slug)
router.get('/teams/:slug',homeController.teams)
router.get('/galery/:slug',homeController.galery)
router.get('/portal/:slug',homeController.portal)



export default router