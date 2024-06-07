function calcSum() {
    let x = document.getElementsByName("a")[0].value
    let y = document.getElementsByName("b")[0].value
    let z = Number(x) + Number(y)
    
    let result = document.getElementById("resultCalc")
    result.innerHTML = "Результат: " + z
    
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(result)
}
function calcMin() {
    let x = document.getElementsByName("a")[0].value
    let y = document.getElementsByName("b")[0].value
    let z = Number(x) - Number(y)
    
    let result = document.getElementById("resultCalc")
    result.innerHTML = "Результат: " + z
    
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(result)
}
function calcMulp() {
    let x = document.getElementsByName("a")[0].value
    let y = document.getElementsByName("b")[0].value
    let z = Number(x) * Number(y)
    
    let result = document.getElementById("resultCalc")
    result.innerHTML = "Результат: " + z
    
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(result)
}
function calcDivide() {
    let x = document.getElementsByName("a")[0].value
    let y = document.getElementsByName("b")[0].value
    let z = Number(x) / Number(y)
    
    let result = document.getElementById("resultCalc")
    result.innerHTML = "Результат: " + z
    
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(result)
}
function calcStepen() {
    let x = document.getElementsByName("a")[0].value
    let y = document.getElementsByName("b")[0].value
    let z = Number(x) ** Number(y)
    
    let result = document.getElementById("resultCalc")
    result.innerHTML = "Результат: " + z
    
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(result)
}

