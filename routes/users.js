var express = require('express');
var router = express.Router();
const Users = require('models/User');

/* GET users listing. */
router.get('/', async(req, res) => {
  const users = await Users.findAll();
  res.render('Users', {title: "Users", usersList: users});
});

module.exports = router;