import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migration1724848105824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'user',
              columns: [
                {
                  name: 'userId',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'varchar',
                  length: '100',
                },
                {
                  name: 'email',
                  type: 'varchar',
                  length: '100',
                  isUnique: true, 
                },
                {
                  name: 'role',
                  type: 'varchar',
                  length: '50',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
