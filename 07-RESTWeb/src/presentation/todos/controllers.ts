import { Request, Response } from "express"
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos"
import { GetTodo, GetTodos, TodoRepository } from "../../domain"




export class TodosController {


    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    public getTodos = (req: Request, res: Response) => {
        new GetTodos(this.todoRepository)
            .execute()
            .then(todos => res.json(todos))
            .catch(error => res.status(400).json({ error }))
    }

    public getTodoById = (req: Request, res: Response) => {
        const id = +req.params.id;

        new GetTodo(this.todoRepository)
            .execute(id)
            .then(todo => res.json(todo))
            .catch(error => res.status(400).json({ error }))

    }

    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const newtodo = await this.todoRepository.create(createTodoDto!);
        res.json(newtodo);
    }


    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        const updateTodo = await this.todoRepository.updateById(updateTodoDto!);
        return res.json(updateTodo);
    }

    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedTodo = await this.todoRepository.deleteById(id);
        return res.json(deletedTodo);
    }

}



