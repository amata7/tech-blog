const { Comment } = require('../models');

const commentData = [
    {
      comment: 'Test Comment 1',
    },
    {
      comment: 'Nice post',
    },
    {
      comment: 'Much informative',
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;