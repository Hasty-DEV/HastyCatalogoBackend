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
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Owner",
    tableName: "owner",
    timestamps: true,
  }
);

export default Owner;
