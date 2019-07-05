

function generate(){
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    document.getElementById('cImage').src = 'https://placeimg.com/'+width+'/'+height+'/'+Categories+'/'+Filters;
    document.getElementById("display").value='https://placeimg.com/'+width+'/'+height+'/'+Categories+'/'+Filters;
     
}

var Categories = "any";
var Filters = "";
var count = 1;
function Changes(pointer){  
 count++
 if (count == 2){
   Categories = (pointer.innerHTML).toLowerCase();
   count=0;
   if(pointer.innerHTML=="ARCHITECTURE") {
      Categories = "arch";
   }
 }
 else{
   Categories = "any";
 }
 
 }

 filters
   function changefilter(pointer){  
    count++;
    if(count == 2){
        Filters = (pointer.innerHTML).toLowerCase();;
       count = 0;
    }
    else{
        Filters = "";
    }
    
   }

 
 


