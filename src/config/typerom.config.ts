import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'jinwoo',
    password: '1234',
    database: 'flowing',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};