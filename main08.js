var rnd = 0;
var Country = null;
var output = document.getElementById('output');
var output1 = document.getElementById('output1');
var btn = document.getElementById('New');
var Guess = document.getElementById('Guess');
var input = document.getElementById('uselect');
var uselect = null;

window.onload = init;
function init(){
    loadJSON(function(res){
        Country = JSON.parse(res);
        
    }, 'https://restcountries.eu/rest/v2/all');
}


btn.addEventListener('click',function(){
    
    
    rnd = Math.floor(Math.random()*249);
    var a = (Country[rnd].name);
    var b =a.split("");
    var c =shuffle(b);
    var question ="";
    var answer = "";
    var dash = "-";
    for(var i = 0 ;i < c.length ; i++){
        question += c[i] ;
        answer += dash;
    }
    console.log(Country[rnd].name);
    document.getElementById("fl").src=(Country[rnd].flag);
    output.innerHTML = (question);
    output1.innerHTML = (answer);
});

Guess.addEventListener('click',function(){
   
    answer = "";
    uselect = input.value ;
    var usel = uselect.split("");
    var ans = (Country[rnd].name).split("");
    console.log(usel);
    console.log(ans);
    for(var i = 0 ; i < ans.length ; i++){
        if(ans[i]==usel[i]){
            answer+=ans[i];
       }
       else{
        answer+="-";
       }
    }
    console.log(answer);
    output1.innerHTML = (answer);
    input.value = "";
});


function loadJSON(callback, url){
    var xhr = new XMLHttpRequest;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
            callback(this.responseText);
        }
    };
    xhr.send();
    
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

