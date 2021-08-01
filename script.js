setInterval(setClock,1000);
const hourHand  = document.querySelector('.hand.hour');
const minHand = document.querySelector('.hand.min');
const secHand = document.querySelector('.hand.sec');
const hour = document.querySelector(".time.hour");
const sec = document.querySelector('.time.sec');
const min = document.querySelector('.time.min');
function setClock(){

    const currDate = new Date();
    const secRatio = currDate.getSeconds()/60;
    const minRatio = currDate.getMinutes()/60;
    const hourRatio = currDate.getHours()/12;
    rotationRatio(hourHand,hourRatio);
    rotationRatio(minHand,minRatio);
    rotationRatio(secHand,secRatio);
hour.innerHTML = currDate.getHours();
min.innerHTML = currDate.getMinutes();
sec.innerHTML = currDate.getSeconds();



}

function rotationRatio(element,rotationRatio){
element.style.setProperty('--rotation',rotationRatio*360);
}
setClock();