import { TasksTable } from "../entities"

export type CreateTaskDTO = {
    title: string,
    description: string
    completed?: boolean
}