import Sequelize from 'sequelize';
import dbConfig from '../../config/database-config';
import Task from '../models/task-model';


const connection = new Sequelize(dbConfig);

Task.init(connection);

export default connection;