//calculate the absence days for any 12 month period throu out the year
// input M-D-Year
const trips = [{go: "3/15/2021", 
              back:"4/15/2021"},
              {go: "3/10/2022", 
              back:"6/15/2022"},
              {go: "7/10/2022", 
              back:"8/15/2022"},
              ];
const daysOfAbsence = (trips) => {
var sum= 0;      
console.log(getNumberOfDays("1/1/2021", "1/1/2022"));
for (var i=0; i<trips.length; i++) {
  for (var k=trips.length-1; k>=i; k--) {
    var goGo = getNumberOfDays(trips[i].go, trips[k].go);
    var backBack = getNumberOfDays(trips[i].go, trips[k].back);
    if(goGo>=365){
      sum;}
    else if(goGo < 365 && backBack > 365) {  
      sum += 365-goGo;  
    }else { 
      sum += getNumberOfDays(trips[k].go, trips[k].back);
    }
  }
 console.log(sum + " days of absence in a 12 month period (starting date: "+ trips[i].go +")");
 sum=0;
  }
};

//helper function
function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
};

daysOfAbsence(trips);