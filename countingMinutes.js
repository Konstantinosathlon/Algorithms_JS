// Counting minutes difference 
var input= '1:30am-2:00pm';

var hours=0;
var totalMins=0;
var start=input.substr(0,input.indexOf('m')-1).split(':');
var until=input.substr(input.indexOf('-')+1, input.lastIndexOf('m')-input.indexOf('-')-2).split(':');
if(input.includes('am')&&input.includes('pm')&&start[0]>=until[0]){
hours=12-Math.abs(start[0]-until[0]);}
else if(input.includes('am')&&input.includes('pm')&&start[0]<until[0]){
hours=Math.abs(start[0]-until[0])+12;}
else if (start[0]>until[0]||start[0]===until[0]&&start[1]>until[1]){
hours=24+(start[0]-until[0]);}
else {
hours=Math.abs(start[0]-until[0]);}

totalMins=parseInt(hours*60)-parseInt(start[1])+parseInt(until[1]);

console.log(totalMins);