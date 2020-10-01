module.exports = (sequelize, Sequelize) => {
    const booking = sequelize.define("booking", {
        bookingID: {
            type: Sequelize.INTEGER(25),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userID: {
            type: Sequelize.STRING,

        },
        theaterID: {
            type: Sequelize.STRING
        },
        movieID: {
            type: Sequelize.STRING
        },
        paymentStatus: {
            type: Sequelize.STRING
        },
        seatNumber: {
            type: Sequelize.INTEGER(50)
        },
        time: {
            type: Sequelize.INTEGER(50)
        },
    }, {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
    });


    return booking;
};