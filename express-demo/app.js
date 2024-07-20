const express = require('express');

const app = express();

app.use(express.json());

const courses = [
    {id:1, name:'course 1'},
    {id:2, name:'course 2'},
    {id:3, name:'course 3'},
    {id:4, name:'course 4'},
    {id:5, name:'course 5'}
];

app.get('/',(req,res) => {
    res.send('express is framework uses nodemon');
    res.send('this is 2nd res')
});
app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.post('/api/courses', (req,res) => {
    console.log("######",req.body)
   let vm = {
    id:courses.length + 1,
    name: req.body.name
   };
   courses.push(vm);
   res.send(vm);
})

app.delete('/api/coursespop/:id',(req,res) => {
    if(req.params.id<0 || req.params.id>courses.length){
      return  res.send("this id doesn't exist");
    };
   
    const popc = courses.splice(req.params.id,1);
    console.log(popc);
   return res.send(popc);
});

app.get('/api/courses/:id',(req,res) => {
     const course = courses.find(c => c.id === parseInt(req.params.id));
     if(!course) res.status(404).send('The course is not found');
     console.log("###",req.params.id)
     console.log("******",course);
     res.send(course);
     
})

//port using environment variables;

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`listening on port ${port} ...`);
})