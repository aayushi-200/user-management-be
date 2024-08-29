import { DataSource } from 'typeorm';
import { Category } from './categories/categories.entity';
import { User } from './users/user.entity';
import { SubSection } from './sub-sections/sub-section.entity';
import { Section } from './sections/sections.entity';
import { Chart } from './charts/charts.entity';
import { DataSourceEntity } from './data-sources/data-sources.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'Password',
    database: 'postgres',
    schema: 'product',
    entities: [
        Category,
        User,
        SubSection,
        Section,
        Chart,
        DataSourceEntity,
    ],
    synchronize: false, // Set this to false in production
    migrations: ['./src/migrations/*.ts'], // Adjust path if needed
    migrationsTableName: 'migrations_history', // Optional: Custom migration table name
});

export default AppDataSource;
