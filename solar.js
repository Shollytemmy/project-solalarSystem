const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')
const form = document.querySelector('form')
const main = document.querySelector('.main')
const img = document.querySelector('img')
const inner = document.querySelector('.inner')
const result = document.querySelector('.result')


const planets = [
    'EARTH',
    'MARS',
    'SUN',              
    'PLUTO',
    'JUPITER',
    'MERCURY',
    'VENUS',
    'MOON',
    'SARTURN',
    'NAPTURNE',
    'URANUS'
]

const planetObj = {
    earth: 89.1,
    mars: 2.2,
    sun : 240,
    pluto: 1.8,
    jupiter:2.1,
    mercury: 2.3,
    venus:1,
    moon: 1.622,
    sartun:2.22,
    napturne:2.11,
    uranus:2.8,

}

planets.forEach((planet) =>{
   select.innerHTML +=`<option value='${planet}'>${planet}</option>`
})

const planetLink = "./images/"
form.addEventListener('submit', (c) =>{
c.preventDefault();
inner.classList.remove('hide')
const mass = c.target.mass.value
const planet = c.target.planet.value
if (planet) img.setAttribute("src", `${planetLink}/${planet.toLowerCase()}.png`)
    inner.style.display = "flex";
        inner.style.justifyContent = "center";
        inner.style.alignItems = "center";


if (!mass) {
    inner.textContent ='Mass is required'
    img.classList.add('hide')
    return
}
if (!planet) {
    inner.textContent ='Choose a planet'
    return  
}
img.classList.remove('hide')

const calWeight = Number(mass) / 9.81 * planetObj[planet.toLowerCase()]
result.textContent = calWeight.toFixed(2) 


})