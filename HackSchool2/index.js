const express = require('express');
const app = express();

app.get('/user/esther', (request, response) => {
	response.sendFile(__dirname + '/index.html'); //_dirname is directory name of this server file
});

app.listen(7777); //can use any number above 1000 ==> URL is http://localhost:7777/user/esther