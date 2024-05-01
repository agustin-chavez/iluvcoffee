import { DataSource } from 'typeorm';
import {CoffeeRefactor1714531606052} from './src/migrations/1714531606052-CoffeeRefactor';
import {Coffee} from './src/coffees/entities/coffee.entity';
import {Flavor} from './src/coffees/entities/flavor.entity';
import {SchemaSync1714533904863} from './src/migrations/1714533904863-SchemaSync';

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [
        Coffee,
        Flavor
    ],
    migrations: [
        CoffeeRefactor1714531606052,
        SchemaSync1714533904863
    ]
});