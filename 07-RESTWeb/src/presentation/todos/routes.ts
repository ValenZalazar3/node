import { Router } from "express"
import { TodosController } from "./controllers"
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/respositories/todo.repository.impl";



export class TodoRoutes {

    static get routes(): Router {

        const router = Router();

        const dataosurce = new TodoDatasourceImpl(); // Aca es donde esta la clave, para que si quiero cambier de base de datos, la cambio y listo. 
        const TodoRepository = new TodoRepositoryImpl(dataosurce);

        const todoController = new TodosController(TodoRepository);



        router.get('/', todoController.getTodos)
        router.get('/:id', todoController.getTodoById)
        router.post('/', todoController.createTodo)
        router.put('/:id', todoController.updateTodo)
        router.delete('/:id', todoController.deleteTodo)


        return router

    }
}