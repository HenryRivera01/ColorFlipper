const colors = [
    'green', 'red', 'rgba(133,122,200)', '#f15025'
]

const btnChangeColor = document.getElementById('btn');
const currentlyColorInfo = document.querySelector('.color'); 
 

btnChangeColor.addEventListener('click', function(){
    //get random number betwen 0-3 (index of colors[])
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];//Cuando se presione el boton asignamos el color random al background del body
    currentlyColorInfo.textContent = colors[randomNumber]; //Para mostrar el color actual 
});

function getRandomNumber(){
    //Utilizamos la librería math para generar un numero aleatorio 
    return Math.floor(Math.random()*colors.length);
}

