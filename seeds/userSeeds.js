const { User } = require('../models');

const userData = [
  {
    name: 'Sal',
    email: 'sal@hotmail.com',
    password: 'password',
  },
  {
    name: 'Lernantino',
    email: 'lernantino@gmail.com',
    password: 'password2',
  },
  {
    name: 'Amiko',
    email: 'amiko2k20@aol.com',
    password: 'password3',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;