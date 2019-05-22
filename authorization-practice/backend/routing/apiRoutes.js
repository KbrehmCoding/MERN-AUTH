const fs = require('fs');
const path = require('path');

/* Here I need to get the data from the userData
compare the citeria given by the user to the data in the userData
return whether the criteria is accepted/correct*/

module.exports = app => {
    app.get('/api/userData', (req, res) => {
        res.json(getUsersData());
    });

    app.post('/api/userData', (req, res) => {
        if (!validateUserRequestBody(req.body)) {
            return res.send({ error: true });
        }
        const User = getUserFromRequestBody(req.body);
        const matchingUser = getMatchingUser(User);
        addUserToDataFile(User);
        res.send(matchingUser);
    });
};

function getUsersData() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/userData.js'), 'utf8'));
}

function validateUserRequestBody(requestBody) {
    if (!requestBody.username || !requestBody.username.length) return false;
    if (!requestBody.userpassword || requestBody.userpassword.length) return false;
    if (!requestBody.useremail || requestBody.useremail) return false;
    return true;
}

function getUserFromRequestBody(requestBody) {
    return {
        username: requestBody.username,
        userpassword: requestBody.userpassword,
        useremail: requestBody.useremail,
    };
}

// later this will be useful for when I make the signup form but right now I am working on the Login form
function addUserToDataFile(User) {
    const User = getUserData();
    User.push(User);
    fs.writeFileSync(path.join(__dirname, '../data/userData.js'), JSON.stringify(User, null, 4));
}

function compareUserInfo(detailsUser1, detailsUser2) {

    return Usermatch;
}

function getMatchingUser(newUser) {
    const User = getUsersData();

    return matchingUserInfo;
}
