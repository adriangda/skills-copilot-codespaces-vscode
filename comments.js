// Create web server and listen on port 3000

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
    res.send('Hello World!');
    });


// Path: index.js
// Compare this snippet from member.js:
// function skillsMember() {
//   console.log('I am a member of the team')
