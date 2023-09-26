var express = require('express');
var router = express.Router();
const Users = require('models/User');

/* GET users listing. */
router.get('/', async(req, res) => {
  const users = await Users.findAll();
  res.render('users/index', {title: "Users", usersList: users});
});

// GET a single user
router.get('/:id', async (req, res) => {
  const requestedId = req.params.id;
  const chosenUser = await Users.findOne({
      where: {id: requestedId}
  });
  res.render('users/user', {
      title: chosenUser.first_name + " " + chosenUser.last_name,
      userItem: chosenUser
  });
});

module.exports = router;