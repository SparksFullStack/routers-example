const express = require('express');

const router = express.Router();

const villians = ['Darth Vader', 'Noface', 'Nohman'];

router.get('/', (req, res) => {
    res.status(200).json(villians);
})

module.exports = router;