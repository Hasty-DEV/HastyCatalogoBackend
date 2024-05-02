import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../loaders/sequelize/sequelize.loader";
import { OwnerType } from "../../../types/Owner/Owner.type";

class Owner extends Model<OwnerType> {
  public id!: number;
  public name!: string;
  public birthday!: Date;
  public gender!: "Male" | "Female" | "Other";
  public phone!: string;
  public cpf!: string;
  public stores!: object;
  public email!: string;
  public password!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Owner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stores: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
  },
  {
    sequelize,
    modelName: "Owner",
    tableName: "owner",
    timestamps: true,
  }
);

export default Owner;
