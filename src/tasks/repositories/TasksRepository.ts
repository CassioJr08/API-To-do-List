import { CreateTaskDTO } from "./ITasksRepository"
import { TasksTable } from "../entities";
import { dataSource } from "../../shared/typeorm"
import { Repository } from 'typeorm'

export class TasksRepository {
    private repository: Repository<TasksTable>

    constructor() {
        this.repository = dataSource.getRepository(TasksTable)
    }

    async create({title, description, completed = false}: CreateTaskDTO): Promise<TasksTable> {
        const task = this.repository.create({title, description, completed})
        return this.repository.save(task)
    }

    async findByName(title: string, description: string, completed = false): Promise<TasksTable | null> {
        return this.repository.findOneBy({ title,  description, completed})
        
      }
}