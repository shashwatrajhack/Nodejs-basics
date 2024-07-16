const path = require("path"); //now this become object with bunch of useful method
const os = require("os"); //this module information about operating system
const EventEmitter = require('events');//this represents the eventemitter is a class not a function.
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
const osObj = os.uptime();
console.log(osObj);
console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);
//const pathObj = path.parse(__filename);

//console.log(pathObj);
//concept of event
//it indicates that something had happened in our app
 


//class is a container for properties and functions which we call method

const emitter = new EventEmitter();

// A listener is a function that will be called when an event is raised
//register a listener

emitter.on('messageLogged',function(arg){
    console.log("listener called",arg);
});


//raise an event
//event with arguments called event-arguments


emitter.emit('messageLogged',{id:1, url:'http//'});


