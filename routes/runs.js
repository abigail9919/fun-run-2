const express = require('express');
const router = express.Router();
const Runs = require('models/Run');

// GET runs page
router.get('/', async (req, res) => {
    const runs = await Runs.findAll();
    res.render('Runs', {title: "Runs", runsList: runs});
});

module.exports = router;