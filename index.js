const {EventEmitter}=require("events")
const {readFile , readFileSync}=require('fs')

console.log('-----------------------------------------------------');
// EVENT CALLING
const eventCall=new EventEmitter()

eventCall.on('gn', function() { console.log("This is Good Night Event"); } )
eventCall.on('gm', function() { console.log("This is Good Morning event");})

eventCall.emit('gn')
eventCall.emit('gm')
console.log('-----------------------------------------------------');

// READING FILE FROM TEXT FILE
const textfile=readFileSync('./test.txt', 'utf-8')
const textfile2=readFileSync('./test2.txt', 'utf-8')

console.log(textfile);
console.log(textfile2);

readFile('./test3.txt', 'utf-8', function(err, txt)
{
    console.log(txt);
})
console.log('-----------------------------------------------------');


