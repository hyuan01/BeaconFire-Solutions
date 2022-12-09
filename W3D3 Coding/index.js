const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const methodOverride = require('method-override');


// express init
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/todo', routes);


// home page
app.get('/', (req, res) => {
    res.send('hi please use /todo/todo.json to navigate to main page');
});

// 404 error
app.all('*', (req, res) => {
    res.send("404 PAGE NOT FOUND :(");
  })

const port = 3000;
app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});