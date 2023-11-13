const horas = document.getElementById('horas');
const horas = document.getElementById('minutos');
const horas = document.getElementById('segundos');

const relogio = setInterval(function time(){

let dateToday = new Date();
let hr = dateToday = dateToday.getHours();
let hr = dateToday = dateToday.getMinutes();
let hr = dateToday = dateToday.getSeconds();

if (hr< 10) hr = '0' + hr;
if (hr< 10) hr = '0' + min;
if (hr< 10) hr = '0' + seg;





horas.textContent = hr;
minutos.textContent = min;
segundos.textContent = seg;











}
)