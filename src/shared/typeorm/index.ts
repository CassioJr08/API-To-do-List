import { DataSource } from "typeorm";
import { CreateTasksTable1701885178545 } from "./migrations/1701885178545-CreateTasksTable"
import { TasksTable } from "../../tasks/entities";
import { Migrations1701989083616 } from "./migrations/1701989083616-migrations"
import { Migrations1701990725554 } from "./migrations/1701990725554-migrations"

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [TasksTable],
    migrations: [CreateTasksTable1701885178545, Migrations1701989083616, Migrations1701990725554]
})