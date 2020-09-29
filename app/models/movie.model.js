module.exports = (sequelize, Sequelize) => {
    const movies = sequelize.define("movies", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Director: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Runtime: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Genre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Rating: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Metascore: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Votes: {
            type: Sequelize.STRING,
            allowNull: false
        },
        releasDate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        movie_img_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
    });


    return movies;
};
