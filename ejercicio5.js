let luces = ['ROJO', 'AMARILLO', 'VERDE']

function cambiodeluz (){
    let color= luces.pop()
    console.log(color)
    if (!luces.length) {
        luces = ['ROJO', 'AMARILLO', 'VERDE']
        return color
    }
    
}
const cambiodetiempo = setInterval(cambiodeluz, 3000)


  