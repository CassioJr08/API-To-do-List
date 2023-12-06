import { DataSource } from "typeorm";
import { CreateTasksTable1701885178545 } from "./migrations/1701885178545-CreateTasksTable";
import { TasksTable } from "../../tasks/entities";

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [TasksTable],
    migrations: [CreateTasksTable1701885178545]
})