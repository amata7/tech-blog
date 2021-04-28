const sequelize = require('../config/connection');
const { User } = require('../models');

const seedUser = require('./userSeeds.json');
// const seedPost = require('./postSeeds');
// const seedComment = require('./commentSeeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    const users = await User.bulkCreate(seedUser, {
      individualHooks: true,
      returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');
  
    // await seedPost();
    // console.log('\n----- POSTS SEEDED -----\n');
  
    // await seedComment();
    // console.log('\n----- COMMENTS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();