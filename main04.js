var output = document.getElementById("content");
var output1 = document.getElementById("content1");
var inputarray = [1, 5, 7, 'javascript', 'CSS', 5, 5, 9, 'HTML', 'javascript', 'HTML'];
var outputarray = [];

output.innerHTML += "input array is "+"["+inputarray+"]"+"<br>";

function Remove_Duplicated_Items(){
   for(var i = 0 ; i < inputarray.length ; i++) {
       if(outputarray.indexOf(inputarray[i]) === -1){
        outputarray.push(inputarray[i]);
       }
       else{
        output1.innerHTML = "output array is "+"["+outputarray+"]";
       }
       
   }
   return 1 ;
  
}








