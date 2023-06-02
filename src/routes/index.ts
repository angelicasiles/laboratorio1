import { Router } from "express"
import cliente from "./Clientes"

const routes = Router();

routes.use('/Clientes', cliente)

export default routes;