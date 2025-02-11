import express from 'express';

import PointsController from './controllers/poitsController';
import ItemsController from './controllers/itemsControllers';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

//index, show, create, update, delete

routes.get('/items',itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;