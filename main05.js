
var output = document.getElementById("output");
var suits =["&clubs;", "&diams;", "&hearts;", "&spades;"];
var cardFaces =["A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
"J", "Q", "K"];


function buildcards(){
var cards = [];
var bgcolor = null;
for(var s in suits){
    bgcolor = (suits[s] =="&hearts;"||suits[s] =="&diams;") ?"red" : "black";
    for(n in cardFaces){
        var card = {
             suit: suits[s]
             ,num: cardFaces[n]
              ,bgColor: bgcolor
                    }
            cards.push(card);
        
                         }
                 }
                 shuffle(cards);
                 return cards ;
                }
                

 function shuffle(arr){
    var holder = null;
    var temp = null;
    for(var i = arr.length-1; i > 0 ; i--){
        holder = Math.floor(Math.random() * i);
        temp = arr[i];
        arr [i] = arr [holder];
        arr[holder] = temp;
        
    }
    return arr;
} 
var html=null;              
function deal(obj){
    
    html="<span class='display' style='color:"+obj.bgColor+"'>"+obj.num+obj.suit+"</span>";
    
}

function start(){
    output.innerHTML = "Player 1  "+"<br>";
    buildcards();
    for(var j = 0 ; j<3 ; j++){
        
        deal(buildcards()[j]);
        output.innerHTML += html;
    }
    output.innerHTML += html+"<br>"+"<br>";

    output.innerHTML += "Player 2  "+"<br>";
    buildcards();
    for(var j = 0 ; j<3 ; j++){
        
        deal(buildcards()[j]);
        output.innerHTML += html;
    }
    output.innerHTML += html+"<br>";
}
   
