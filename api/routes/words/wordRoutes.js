const express = require('express');
const router = express.Router();

const WordModel = require('./wordModel'); 
const wordService = require('./wordService');

// GET /words/
router.route('/words')
    .get(async (req, res, next) => {
        try {
            console.log('getting words');
            WordModel.findOne().then(words => {
                if (!words) { words = new WordModel(); }
                console.log('getting words', words);
                res.send(words);
            });
        } catch (e) {
            next(e);
        }
    });

router.route('/words')
    .put(async (req, res, next) => {
        try {
            WordModel.findOne().then(words => {
                if (!words) { words = new WordModel() }

                Object.assign(words, req.body);

                words.save().then(() => res.send("OK"))
                .catch((err) => {
                    res.status(422);
                    res.send(err);
                });
            });
        } catch (e) {
            next(e);
        }
    });

exports.router = router;