let { User } = require('../sequelize');

module.exports = function (app) {
    // create a user
    app.post('/register', (req, res) => {
        User.create(req.body).then(user =>
            console.log('user', res.json(user))).catch(function (error) {
                console.log(res.json(error));
            });;
    });

    // get all users

    app.get('/users', (req, res) => {
        User.findAll().then(users => res.json(users));

    });


    app.get('/search', (req, res) => {
        const username = req.query.user;
        User.findAll({
            where: {
                firstName: username
            }
        }).then(user => res.json(user));
    });
}