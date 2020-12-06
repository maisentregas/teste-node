import { Sequelize } from "sequelize-typescript";

class SequelizeHelper {
    private connection!: Sequelize;
    getConnection(): Sequelize {
        return this.connection;
    }

    connect(): void {
        this.connection = new Sequelize({
            dialect: 'mariadb',
            host: '127.0.0.1',
            username: 'root',
            password: '123123',
            database: 'test',
            models: [__dirname + '/../models'],
        });
    }
    
    disconnect(): void {
        this.connection.close();
    }
}

export default new SequelizeHelper();