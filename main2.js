
var mobile = {
    type : "Samsung",
    model : "Galaxy A50",
    Weight : "166 g" ,
    Battery : "Li-Po 4000 mAh",
    SIM : "Single SIM (Nano-SIM)",
    color : "black",
    size : "6.4 inches",
    launch : 1397,
    Display:{
        Type :"Super AMOLED capacitive touchscreen, 16M colors",
        Size :"6.4 inches, 100.5 cm2 (~84.9% screen-to-body ratio)",
        Resolution :"1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
        Protection :"Corning Gorilla Glass 3"
    },
    Platform : {
        OS :"Android 9.0 (Pie)"	,
        Chipset :"Exynos 9610 (10nm)",	
        CPU :"Octa-core (4x2.3 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)",
        GPU :"Mali-G72 MP3"

    }

}
// console.log(mobile);
var input = prompt("please enter property name you want to see :\ntype\nmodel\nWeight\nBattery\nSIM\ncolor\nsize\nslaunch\nDisplay\nPlatform\n"); 

// alert(mobile[input]);
var req = prompt("the value of "+ [input]+" is " + mobile[input] + " \nDO YOU WANT TO UPDATE THIS? (YES or NO) ");

var a = (req=="YES")?prompt("Enter new value"):(a = mobile[input]);
mobile[input] = a;
alert ("value of "+input+" is "+a );
console.log ("value of "+input+" is "+a );


