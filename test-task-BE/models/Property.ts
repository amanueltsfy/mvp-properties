import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/db";
import { OrderTypes, PropertyTypes } from "../constants/enum";

const Property = sequelize.define(
  "Property",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    bedrooms: {
      type: DataTypes.INTEGER
    },
    bathrooms: {
      type: DataTypes.INTEGER
    },
    size: {
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.ENUM,
      values: PropertyTypes,
      allowNull: false,
      defaultValue: "House"
    },
    order: {
      type: DataTypes.ENUM,
      values: OrderTypes,
      allowNull: false,
      defaultValue: "Buy"
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    propertyID: {
      type: DataTypes.STRING(5),
      allowNull: false,
      unique: true,
      validate: {
        len: [5, 5]
      }
    }
  },
  {
    modelName: "Property",
    timestamps: true
  }
);

export default Property;
