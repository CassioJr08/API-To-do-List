import { DataSource } from "typeorm";
import { CreateTasksTable1701885178545 } from "./migrations/1701885178545-CreateTasksTable";

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [],
    migrations: [CreateTasksTable1701885178545]
})