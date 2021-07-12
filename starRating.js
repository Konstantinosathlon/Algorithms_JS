//translates a number to a star rating (ex."full full full half empty" out of "3.38")

function StarRating(str) { 

    var output=[];
    var full =str.split('.')[0];
    var empty=5;
    var half =str.split('.')[1];
    
    if(half>=75){half=0;
    full++;}
    else if (half>=25&&half<75){
      half=1;;
    }
    empty-=parseInt(full) + parseInt(half);
    for(let i=1; i<=5; i++){
      if(full>0){output.push('full ');full--}
      else if(half>0){output.push('half ');half--;}
      else{output.push('empty ')}
    }
    return output.join('');
    }
    StarRating('3.38');