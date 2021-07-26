import bcrypt from "bcryptjs";

export default (sequelize, DataTypes) => {
  const School = sequelize.define(
    "School",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      hooks: {
        beforeCreate: (school) => school.password && school.hashPassword(),
      },
    }
  );
  School.associate = () => {};


  School.prototype.hashPassword = async function hashPassword() {
    const salt = 10;
    this.password = await bcrypt.hash(this.password, salt);
    return this.password;
  };
  return School;
};
