const POINTERHOUR = document.querySelector('#hour');
const POINTERMINUTE = document.querySelector('#minute');
const POINTERSECOND = document.querySelector('#second');



var data = new Date();
console.log(data);

let hr=data.getHours();
let min= data.getMinutes();
let sec= data.getSeconds();
console.log("Hora:" + hr + " Minuto: " + min + " Segundo: " + sec );

let positionHr= (hr*360/12) + (min*(360/60)/12);
let positionMin= (min*360/60) + (sec*(360/60)/60);
let positionSec= sec * 360/60;

function executarRelogio ()
{

positionSec = positionSec+6;
positionMin=positionMin+(6/60);
positionHr=positionHr+(3/360);

POINTERHOUR.style.transform= "rotate(" + positionHr + "deg)";
POINTERMINUTE.style.transform= "rotate(" + positionMin + "deg)";
POINTERSECOND.style.transform= "rotate(" + positionSec + "deg)";
}
var interval = setInterval (executarRelogio,1000);
