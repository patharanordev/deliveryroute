
var delivery = require('./libs/delivery');
var stdin = process.openStdin();

var isDebug = true;
var cmdStr = '';

console.log('Note :');
console.log(' - Normal mode is adding delivery route.');
console.log(' - You must enter your delivery route first by input ');
console.log('   the first alphabet of source town name concatinate ');
console.log('   with the first alphabet of destination town name ');
console.log('   in uppercase and then delivery cost between two towns ');
console.log('   in numeric than more than zero.');
console.log('      Ex. ');
console.log('        - You source is Aumarin -> "A"');
console.log('        - You destination is Mercury -> "M"');
console.log('        - Cost between two towns(assume) is 5 km. -> "5"');
console.log('          (don\'t care about unit)\n');
console.log('        So you can define your route with "AM5" etc.');
console.log(' - After you have added routes already, You can calculate ');
console.log('   delivery cost by using command "findcost" and following ');
console.log('   first alphbet of source/destination in uppercase.');
console.log('   In each node will be separate be "-"');
console.log('   please refer example below :');
console.log('      Ex. "findcost A-B-C"\n');
console.log(' - If your route can\'t be solved, it will show "No Such Route"');
console.log(' - Show command type "help"');
console.log(' ');
console.log('Important!:');
console.log(' 1. it can bring you to destination.');
console.log(' 2. it can\'t find the cheapest delivery route.');
console.log('\n');

stdin.addListener("data", function(d) {

    cmdStr = d.toString().trim();
    // console.log("you entered: [" + cmdStr + "]");

    if(cmdStr.split(' ')[0]=="findcost"){
        var nodes = cmdStr.split(' ')[1].split('-');
        var result = delivery.getCost(nodes, isDebug);
        if(result.indexOf('Unknown')<-1){
            console.log('\nDelivery cost is ' + result);
        } else {
            console.log('\nError : ' + result);
        }

    } else if(cmdStr=="clsdebug"){
        isDebug = false
    } else if(cmdStr=="opndebug"){
        isDebug = true
    } else if(cmdStr=="help"){
        console.log('Command :');
        console.log(' clsdebug - close debug message.');
        console.log(' opndebug - open debug message.');
        console.log(' findcost - calculate cost of delivery route');
        console.log(' help     - print all command');
    } else {
        // Add route
        var result = delivery.addRoute(cmdStr[0], cmdStr[1], cmdStr.substring(2));
        if(result==true){
            console.log('Routes : ');
            console.log(delivery.getRoutes());
        } else {
            console.log('Found an error. Please check your input first,');
            console.log('it should has source,destination and delivery cost...');
        }
    }
});