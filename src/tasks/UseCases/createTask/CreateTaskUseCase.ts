import { TasksRepository } from "../../repositories/TasksRepository"
import { CreateTaskDTO } from "../../repositories/ITasksRepository"
import { TasksTable } from "../../entities"
import { AppError } from "../../../shared/errors"


export class CreateTasksUseCase{
    
    constructor(private taskRepository: TasksRepository){}

    async execute({ title, description, completed }: CreateTaskDTO): Promise<TasksTable> {
        const taskAreadyExists = await this.taskRepository.findByName(title, description, completed)

        if(taskAreadyExists){
           throw new AppError('Role already exists', 400)
        }

        return this.taskRepository.create({ title, description, completed })
    }

}
