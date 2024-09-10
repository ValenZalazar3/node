import { Router } from "express";

import { TodoRoutes } from "./todos/routes";

//rutas de app
export class AppRoutes {

    static get routes(): Router {
        const router = Router()
        router.use('/api/todo', TodoRoutes.routes)
        return router
    }
}


