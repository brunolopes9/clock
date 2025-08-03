const POINTERHOUR = document.querySelector('#hour');
const POINTERMINUTE = document.querySelector('#minute');
const POINTERSECOND = document.querySelector('#second');

function executarRelogio ()
{
const now = new Date();

const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();


 const positionHr = (hour % 12) * 30 + minutes * 0.5;
  const positionMin = minutes * 6 + seconds * 0.1;
  const positionSec = seconds * 6;

POINTERHOUR.style.transform = `rotate(${positionHr}deg)`;
POINTERMINUTE.style.transform = `rotate(${positionMin}deg)`;
POINTERSECOND.style.transform = `rotate(${positionSec}deg)`;
}

executarRelogio();
var interval = setInterval (executarRelogio,1000);
