const config = require("config");
const express = require("express");
const courses = require('./courses.js');
const joi = require("joi");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
app.set('view engine','pug');
app.set('views','./views')

app.use(express.json());

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

//configuration

console.log('Application Name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
//console.log('Mail password: ' + config.get('mail.password'));


if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("morgan enabled...");
}

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
  { id: 4, name: "course 4" },
  { id: 5, name: "course 5" },
];

app.get("/", (req, res) => {
  res.render('index',{title:'My Express App',message:'its raj'});
});


//port using environment variables;

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port} ...`);
});
