const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.belongsToMany(Comment, {
    through: {
        model: Post, 
        unique: true
    },
    as: 'user_id'
});

Comment.belongsTo(User, {
    through: {
        model: Post, 
        unique: true
    },
    as: 'comment_id'
});

module.exports = { User, Post, Comment };
