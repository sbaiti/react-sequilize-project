let bodyParser = require('body-parser');
let { User } = require('../sequelize');



module.exports = function (app) {
    app.use(bodyParser.json());

    // create a user
    app.post('/register', (req, res) => {
        console.log('req.body***********///////////////////////', req.body);
        User.create(req.body).then(user =>
            console.log('user', res.json(user))).catch(function (error) {
                console.log(res.json(error));
            });;
    });

    // get all users

    app.get('/findUser', (req, res) => {
        User.findAll().then(users => res.json(users));

    });


    app.get('/search', (req, res) => {
        console.log('req*********************************', req);
        User.findOne().then(user => res.json(user))
    });

}