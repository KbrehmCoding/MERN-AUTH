const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public/')));

require('./backend/routing/apiRoutes')(app);
require('./backend/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});