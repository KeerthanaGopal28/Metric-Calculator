const btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    const inputEl = document.getElementById("input-el").value
    let len = document.getElementById("len")
    let meter = inputEl/3.281
    let feet = inputEl*3.281
    len.innerHTML = `${inputEl} meters =${feet.toFixed(3)} feet | ${inputEl} feet = ${meter.toFixed(3)} meters` 
    let vol = document.getElementById("vol")
    let liters = inputEl/0.264
    let gallons = inputEl*0.264
    vol.innerHTML = `${inputEl} liters =${gallons.toFixed(3)} gallons | ${inputEl} gallons = ${liters.toFixed(3)} liters`
    let mass = document.getElementById("mass")
    let kilos = inputEl/2.204
    let pounds = inputEl*2.204
    mass.innerHTML = `${inputEl} kilos =${pounds.toFixed(3)} pounds | ${inputEl} pounds = ${kilos.toFixed(3)} kilos` 

})
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/