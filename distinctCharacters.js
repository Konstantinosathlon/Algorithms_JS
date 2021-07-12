//checks if a string has at least 10 distinct characters
var str = '1234bma=6po';

const distinctCharacters = (str) => {
var arr = str.split('');
var count=0;
letter='';
 
while(arr.length>0){
  letter = arr.shift();
  if(!arr.includes(letter)){
    count++;
    }
  } 
 console.log(count>=10);
 }
 distinctCharacters(str);