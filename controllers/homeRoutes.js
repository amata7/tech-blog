const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all users and JOIN with user data
    const userData = await User.findAll({
    });

    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
