import { Router } from "express";
import clienteController from "../controller/clienteController";


const routes = Router();

routes.get('', clienteController.getAll);
routes.get('/:cedula', clienteController.getById);
routes.post('', clienteController.add);

export default routes;
