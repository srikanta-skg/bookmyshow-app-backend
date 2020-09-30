module.exports = (sequelize, Sequelize) => {
  const event = sequelize.define("event", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
  }, {
  
    freezeTableName: true,
  });

  // Tutorial.associate = models => {
  //   Tutorial.hasone(models.extra, {
  //     onDelete: "cascade",
  //     foreignKey: 'id',
  //   })
  // }

  return event;
};


//heroku config:set DATABASE_URL='mysql://bf69ed6347885b:ac8a04d5@us-cdbr-east-02.cleardb.com/heroku_f5e3542c76886a7?reconnect=true'

//   DATABASE_URL: mysql://bf69ed6347885b:ac8a04d5@us-cdbr-east-02.cleardb.com/heroku_f5e3542c76886a7?reconnect=true

//mysql --host=us-cdbr-east-02.cleardb.com --user=bf69ed6347885b --password=ac8a04d5 --reconnect heroku_f5e3542c76886a7


// mysql> CREATE TABLE IF NOT EXISTS `event` (
//   id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   email varchar(255) NOT NULL,
//   name varchar(255) NOT NULL,
//   active BOOLEAN DEFAULT false
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;