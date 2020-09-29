module.exports = (sequelize, Sequelize) => {
  const theatre = sequelize.define("theatre", {
    theatre_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    theatre_Name: {
      type: Sequelize.STRING
    },
    theatre_Location: {
      type: Sequelize.STRING
    },
    city_Id: {
      type: Sequelize.BOOLEAN
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
  return theatre;
};