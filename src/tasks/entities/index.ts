import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'  

@Entity({ name: 'TasksTable' })
export class TasksTable{

    @PrimaryColumn()
    id?: string

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at?: Date
    
    @Column()
    completed?: boolean


    constructor() {
        if(!this.id){
            this.id = uuidv4()
        }
    }

}