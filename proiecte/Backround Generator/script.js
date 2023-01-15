const css = document.querySelector("h3")

const color1 = document.querySelector("#color1")
const color2 = document.querySelector("#color2")

const body = document.getElementById("gradient")

const buton = document.getElementById("randomizer")

let degree = '45deg'

function setGradient(firstColor, secondColor, deg){
    body.style.background = "linear-gradient( " + deg + "," + firstColor +", "+ secondColor + ")"
    css.textContent = body.style.background + ';'
}

function randomizer ()
{
    return Math.floor(Math.random() * 255)
}

function randomDeg(){
    let a;
    if(Math.round(Math.random()))
    {
        a = 1
    }
    else {
        a = -1
    }
    degree = (Math.round(Math.random() * 180) * a) + "deg"
    return degree;
}

function randomColor() {
    return "rgb(" + randomizer() + ", " + randomizer() + ", " + randomizer() + ')'
}

function setRandomGradient(){
    setGradient(randomColor(), randomColor(), randomDeg())
}

function setGradientOnInput(){
    setGradient(color1.value, color2.value, degree )
}
color1.addEventListener("input", setGradientOnInput)
color2.addEventListener("input", setGradientOnInput)

 setRandomGradient()
