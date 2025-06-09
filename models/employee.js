module.exports = (sequelize, Sequelize) => {
  const employee = sequelize.define(
    "employee",
    {
      u_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      designation: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      salary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },

    {
      createdAt: "created_at",
      updatedAt: "updated_at",

      timestamps: true,
      tableName: "employee",
    }
  );

  return employee;
};
