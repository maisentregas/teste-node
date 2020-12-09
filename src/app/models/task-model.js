import { DataTypes, Model } from 'sequelize';


export default class Task extends Model {
  static init(connection) {
    super.init({
      task: {
        type: DataTypes.STRING,
      },
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, { sequelize: connection });
  };
};