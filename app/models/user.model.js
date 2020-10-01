module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
    user_id: {
      type: Sequelize.STRING(25),
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  });

  // Tutorial.associate = models => {
  //   Tutorial.hasone(models.extra, {
  //     onDelete: "cascade",
  //     foreignKey: 'id',
  //   })
  // }
  return user;
};