module.exports = (sequelize, Sequelize) => {
    const city = sequelize.define("city", {
        city_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true,
        },
        city_Name: {
            type: Sequelize.STRING,
        },
    }, {
        freezeTableName: true,
    });


    return city;
};
