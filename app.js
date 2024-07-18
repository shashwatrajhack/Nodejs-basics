//const path = require("path"); //now this become object with bunch of useful method
//const os = require("os"); //this module information about operating system
const EventEmitter = require('events');//this represents the eventemitter is a class not a function.
const Logger = require('./logger');
const http = require('http');
//using function
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write("Hello Duniya");
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
//using socket service-->
//server.on('connection',(socket) =>{
  //  console.log("New connnection...")
//});

server.listen(3000);
console.log("listening on port 3000");

//const freeMemory = os.freemem();
//const totalMemory = os.totalmem();
//const osObj = os.uptime();
//console.log(osObj);
//console.log(`Total Memory ${totalMemory}`);
//console.log(`Free Memory ${freeMemory}`);
//const pathObj = path.parse(__filename);

//console.log(pathObj);
//concept of event
//it indicates that something had happened in our app
 


//class is a container for properties and functions which we call method



// A listener is a function that will be called when an event is raised
//register a listener
const logger = new Logger();
logger.on('messageLogged',(arg) => {
    console.log("Message is logged");
});

logger.log('message')


// emitter.on('messageLogged',function(arg){
//     console.log("listener called",arg);
// });


//raise an event
//event with arguments called event-arguments


//emitter.emit('messageLogged',{id:1, url:'http//'});


