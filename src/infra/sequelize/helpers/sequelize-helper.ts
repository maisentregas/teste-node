import { Sequelize } from "sequelize";
import useTodoSequelizeModel from "../models/todo-sequelize-model";

class SequelizeHelper {
    private connection!: Sequelize;
    public TodoSequelizeModel: any;

    getConnection(): Sequelize {
        return this.connection;
    }

    async connect(): Promise<void> {
        this.connection = new Sequelize({
            dialect: 'mariadb',
            host: '127.0.0.1',
            username: 'root',
            password: '123123',
            database: 'test',
        });

        this.TodoSequelizeModel = useTodoSequelizeModel(this.connection);
        await this.sync();
    }

    async sync(): Promise<void> {
        await this.connection.sync();
    }
    
    async disconnect(): Promise<void> {
        await this.connection.close();
    }
}

export default new SequelizeHelper();