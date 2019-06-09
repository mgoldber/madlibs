const Word = require('./wordModel');

exports.listJobs = async () => {
    try {
        const words = await Word.find({});
        return words;
    } catch (e) {
        throw e;
    }
}