//1. checks if there is a close parenthesis for every open parenthesis.

function RemoveBrackets(str) { 
    while (str.includes('()')){
        str = str.replace('()', '');
    }
    return str.length===0? 1 : 0;
  }
  
  console.log(RemoveBrackets(')(())('));
  
  //2. checks if there is a close parenthesis after every open parenthesis.

  const compareParenth = (str) => {
    str1 =str.match(/[(]/g);
    str2 =str.match(/[)]/g);
  return Math.abs(str1.length - str2.length);
  }
  
  compareParenth(str);