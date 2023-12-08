import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class Migrations1701990725554 implements MigrationInterface {
    name = 'Migrations1701990725554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Alterar a coluna 'completed' na tabela 'TasksTable'
        await queryRunner.changeColumn('TasksTable', 'completed', new TableColumn({
            name: 'completed',
            type: 'boolean',
            isNullable: true, // Permitir valores nulos
            default: false, // Valor padrão
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Reverter a alteração da coluna 'completed'
        await queryRunner.changeColumn('TasksTable', 'completed', new TableColumn({
            name: 'completed',
            type: 'boolean',
            isNullable: false, // Reverter para não permitir valores nulos, se necessário
            default: false,
        }));
    }

}
