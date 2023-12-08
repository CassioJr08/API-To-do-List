import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class Migrations1701989083616 implements MigrationInterface {
    name = 'Migrations1701989083616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Adicionar a nova coluna 'tarefa_concluida' à tabela 'TasksTable'
        await queryRunner.addColumn('TasksTable', new TableColumn({
            name: 'completed',
            type: 'boolean',
            default: false, // Se desejar um valor padrão, ajuste conforme necessário
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Reverter a adição da coluna 'tarefa_concluida'
        await queryRunner.dropColumn('TasksTable', 'completed');
    }

}
