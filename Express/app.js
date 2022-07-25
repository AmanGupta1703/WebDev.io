// // Importing the express module
// const express = require('express');

// const path = require('path')

// // Creating an express app
// const app = express();

// const port = 80;

// // for serving static files
// app.use('/static', express.static('static'));

// // Set the template engine as pug
// app.set('view engine', 'pug');

// // Set the views directory
// app.set('views', path.join(__dirname, 'views'));

// // Our pug demo endpoint
// app.get("/demo", (req, res) => {
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there! I am planning to start js projects and come back to this playlist '})
// });

// app.get("/", (req, res) => {
//     res.status(200).send('This is my home page, first express app with Harry');
// });

// app.get("/about", (req, res) => {
//     res.send('This is my about page, first express app with Harry');
// });

// app.post("/about", (req, res) => {
//     res.send('This is my post resquet of about page, first express app with Harry');
// });

// app.get("/this", (req, res) => {
//     res.status(404).send('This page not found');
// });

// app.listen(port , () => {
//     console.log(`The application started successfully on port ${port}`);
// });


const express = require('express');
const path = require('path')
const app = express();
const port = 80;

// EXPRESS RELATED STUFF
app.use('/static', express.static('static'));

// PUG STUF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// END POINTS
app.get('/',(req, res) => {
    const con = "This is the best content on the internet"
    const params = {'title':'PugIsTheBest', 'content': con}
    res.status(200).render('index.pug', params)
})

// START THE SERVER
app.listen(port , () => {
    console.log(`The application started successfully on port ${port}`);
});