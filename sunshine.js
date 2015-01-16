/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {//"word"
    var arr= str.match(/[a-zA-Z ]/g);//["w","o","r","d"]
    var revStr="";

    for(i=arr.length-1;i>=0;i--){
          revStr+=arr[i];

    }

    return revStr;
  
}

/**
  Write a function that takes two parameters as input in the order
  of string, character. With the first string parameter use Array
  functionality remove the last character and put it at the beginning
  of the array. Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/
function spliceString(str, char) {
      var arr= str.split("");
    arr.splice(0,0,arr[arr.length-1]);
    arr.splice(-2,0,char); 
  
      var string=arr.join("");
      var condense= string.substring(0,string.length-1);
    return condense;

}

/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
function speakPigLatin(strArray) {

var array=[];

var changedStr=strArray.map(function(x){    
  return x.substring(1,x.length).concat(x[0]).concat("ay");
});


  return changedStr;
}


