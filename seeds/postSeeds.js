const { Post } = require('../models');

const postData = [
    {
      title: 'Test Post 1',
      content: 'Thanks for viewing!',
    },
    {
      title: 'Testing Post 2',
      content: 'testing test tester',
    },
    {
      title: 'Test Numba 3',
      content: 'zip zop doop',
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;