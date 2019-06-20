var tasks =[
    "Eating breakfast",
    "Reading tasks",
    "Visiting customers",
    "Following projects",
    "Preparing KPI Report",
    "Eating launch",
   "Presentations preparation",
   "Meeting with managers",
   "Daily report preparation",
   "Reading new documents" 
    ];

    var stat=["done","in progress","to do"];
  
for(var x in tasks){
    console.log(x);
    console.log(tasks[x]);
  }

var selectask = prompt("please enter task number from (1-10):\n1- Eating breakfast\n2- Reading tasks\n3- Visiting customers\n4- Following projects\n5- Preparing KPI Report\n6- Eating launch\n7- Presentations preparation\n8- Meeting with managers\n9- Daily report preparation\n10- Reading new documents");
var selectstat = prompt("selected task is: " +tasks[selectask-1]+ "\n please select Status(1-3) :\n 1-done  2-in progress  3-to do");
selectask = Number(selectask);
selectstat = Number(selectstat);

console.log(tasks[selectask-1]+" Status is "+stat[selectstat-1])
alert(tasks[selectask-1]+" Status is "+stat[selectstat-1])



