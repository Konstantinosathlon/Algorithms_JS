//adding all even numbers up to num.
sum=0;
function addEven(num){
  if(num===2){
    return num;}
else if (num%2===0){
  return num+addEven(num-2)}
  else return addEven(num-1);

}
console.log(addEven(101));
