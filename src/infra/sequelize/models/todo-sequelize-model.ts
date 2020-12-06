import { DataTypes, Model } from 'sequelize';
import { AllowNull, AutoIncrement, Column, PrimaryKey, Table } from 'sequelize-typescript';

export interface TodoI {
    id: number;
    description: string;
    created_at: number;
}

@Table({ tableName: "todo_list", timestamps: true })
export default class TodoSequelizeModel extends Model implements TodoI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number;

    @AllowNull(false)
    @Column(DataTypes.STRING)
    description!: string;
    
    @Column(DataTypes.INTEGER)
    created_at!: number;
}