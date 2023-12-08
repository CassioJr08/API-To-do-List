import { Request, Response } from "express"
import { CreateTasksUseCase } from "./CreateTaskUseCase"
import { TasksRepository } from "../../repositories/TasksRepository"



export class CreateTaskController {
    
    async handle(req: Request, res: Response): Promise<Response>{
        const repository = new TasksRepository()
        const createTaskUseCase = new CreateTasksUseCase(repository)
        const { title, description, completed } = req.body
        const role = await createTaskUseCase.execute({ title, description, completed })
        return res.status(201).json(role)

    }
}