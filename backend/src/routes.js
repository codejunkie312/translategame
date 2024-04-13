const express = require('express');
const router = express.Router();
const { fetchWords } = require('./API');

router.get('/:language_code/words', (req, res) => {
    const language_code = req.params.language_code;
    fetchWords(language_code)
        .then(data => res.json(data).status(200))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
