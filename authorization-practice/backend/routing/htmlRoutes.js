const path = require('path');

module.exports = app => {
    app.get('/data', (req, res) => {
        res.sendFile(path.join(__dirname, ''));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, ''));
    });
};