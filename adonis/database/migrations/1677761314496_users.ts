import BaseSchema from '@ioc:Adonis/Lucid/Schema';
import { Knex } from 'knex';

export default class extends BaseSchema {
    protected tableName = 'users';

    public async up() {
        this.schema.createTable(this.tableName, (table: Knex.CreateTableBuilder) => {
            table.uuid('id', {primaryKey: true});
            table.string('first_name', 100);
            table.string('last_name', 100);
            table.string('email', 50).unique();

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', {useTz: true});
            table.timestamp('updated_at', {useTz: true});
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
