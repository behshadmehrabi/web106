
var vote = document.getElementsByClassName("vote");
var test = document.getElementsByClassName("esm");
var p = document.getElementById("show");
var Name = document.getElementById("add");
var table = document.getElementById("table");
var names = ["Laurence","Mike","John","Larry"];
var no = 0;
var count = 0;
var html1="";
var counter =[];
for(var i = 0 ; i < names.length ;i++){
    no++;
    html1+="<tr><td onclick='number(this)'>"+no+"</td><td class='esm'>"+names[no-1]+"</td><td class='vote'>"+count+"</td></tr>";
    counter.push(0);
    }

table.innerHTML += html1;
var a = null;
var L = null;
var html = html1;
function add(){
    no++;
    names.push(Name.value);
    html="<tr><td onclick='number(this)'>"+no+"</td><td class='esm'>"+names[no-1]+"</td><td class='vote'>"+count+"</td></tr>";
    table.innerHTML += html;
    Name.value = "";
    counter[no-1]=0;
    console.log(names);
}
function number(pointer){
    a = vote[pointer.innerHTML-1];
    counter[pointer.innerHTML-1]++;
    a.innerHTML = counter[pointer.innerHTML-1];
    L=test[pointer.innerHTML-1];
    p.innerHTML=L.innerHTML+" is on row #"+pointer.innerHTML;
}



