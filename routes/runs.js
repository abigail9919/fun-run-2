const express = require('express');
const router = express.Router();
const Runs = require('models/Run');

// GET runs page
router.get('/', async (req, res) => {
    const runs = await Runs.findAll();
    res.render('runs/index', {title: "Runs", runsList: runs});
});

// GET a single run
router.get('/:id', async (req, res) => {
    const requestedId = req.params.id;
    const chosenRun = await Runs.findOne({
        where: {id: requestedId}
    });
    res.render('runs/run', {
        title: chosenRun.name + " Details",
        runItem: chosenRun
    });
});

module.exports = router;