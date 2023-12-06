import { CreateTaskDTO } from "./ITasksRepository"
import { TasksTable } from "../entities";
import { dataSource } from "../../shared/typeorm"
import { Repository } from 'typeorm'

export class TasksRepository {
    private repository: Repository<TasksTable>

    constructor() {
        this.repository = dataSource.getRepository(TasksTable)
    }

    async create({title, description}: CreateTaskDTO): Promise<TasksTable> {
        const task = this.repository.create({title, description})
        return this.repository.save(task)
    }

    async findByName(title: string, description: string): Promise<TasksTable | null> {
        return this.repository.findOneBy({ title,  description})
        
      }
}