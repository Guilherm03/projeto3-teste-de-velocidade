let vehicle1 = prompt("Dê um nome para o primeiro veículo: ")
let vehicle2 = prompt("Dê um nome para o segundo veículo: ")
const speed1 = prompt(`Dê a velocidade do ${vehicle1} :`)
const speed2 = prompt(`Dê a velocidade do ${vehicle2} :`)

if (speed1 > speed2) { 
    alert(`${vehicle1} está ${speed1}km/h mais rápido que o ${vehicle2} que está a ${speed2}km/h.`)
}
else if (speed1 < speed2) {
    alert(`${vehicle2} está ${speed2}km/h mais rápido que o ${vehicle1} que está a ${speed1}km/h.`)
}
else {
    alert(`Tanto ${vehicle1} quanto ${vehicle2} estão na mesma velocidade de ${speed1 || speed2}km/h.`)
}