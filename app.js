const hexa = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
] 

//Seleccionandon el boton con con su ID
const btnChangeColor = document.getElementById('button');

//Seleccionando el span con su clase se debe incluir el punto al inicio ya que es una clase
const currentlyColor = document.querySelector('.CurrentlyColor');
console.log(currentlyColor);

btnChangeColor.addEventListener('click',()=>{
    changeBgColor();
})
const randomNumber = Math.floor(Math.random())
function getRandomNumber(){
    const randomNumber = Math.ceil(Math.random()*(hexa.length-1));
    return randomNumber
}

function changeBgColor(){
    let color = '#'
    for (let i = 0; i <6; i++) {
        color += hexa[getRandomNumber()];
    }
    document.body.style.backgroundColor = color;
    currentlyColor.textContent = color;
}