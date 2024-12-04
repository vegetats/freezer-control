let coolingLevel = 0; 
let turboMode = false; 
const botao = document.getElementById("regulatorButton"); 

function showText(tag, texto) {
    let location = document.querySelector(tag); 
    location.innerHTML = texto; 
}

function showMessage() {
    if(turboMode) {
        showText('p', `Frio Turbo`);
    } else showText('p', `Frio ${coolingLevel}`);
}
showMessage(); 

function manipulateTemperature(event) { 
    if(event == 'hold') {
        turboMode = !turboMode; 
    } else if(event == 'click') {
        if(coolingLevel < 2) {
            coolingLevel++;   
        } else coolingLevel = 0;  
    } 
    showMessage();
}

let timeZero; 
const timeLimit = 1000;

botao.addEventListener('mousedown', () => {
    timeZero = Date.now();
});
botao.addEventListener('mouseup', () => {
    let timeOne = Date.now(); 
    let timePressed = timeOne - timeZero;

    if(timePressed >= timeLimit) {
        manipulateTemperature('hold'); 
    } else manipulateTemperature('click'); 
}); 