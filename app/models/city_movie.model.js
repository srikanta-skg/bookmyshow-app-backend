module.exports = (sequelize, Sequelize) => {
    const cityMovieJunction = sequelize.define("cityMovieJunction", {
        movieID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true,
        },
        City_ID: {
            type: Sequelize.STRING
        },
    }, {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
    });
    return cityMovieJunction;
};
