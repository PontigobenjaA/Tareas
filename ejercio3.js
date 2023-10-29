//Ejercio1
const usuario = parseInt(prompt("dame un numero"));
let numero =1
while (numero<= usuario) {
    numero++;
    if (numero % 5 === 0) {
        console.log(numero)
    }
}
//Ejercio 2
const usuario1 = parseInt(prompt("ingresa un numero (entre 1 y 50)"))
const usuario2 = parseInt(prompt("Ingresa un numero distinto(entre 1 y 50)"))
let loteria = 0
while (loteria<=50) {
    loteria++
    if (loteria === usuario1 || loteria === usuario2) {
        console.log("¡lotería ${loteria}")
    }else{
        console.log(loteria)
    }
}
//Ejercio3
let digito =[]
let user;
do{
user=parseInt(prompt("Dame un numero (para finalizar un 0)"))
    if (user!==0) {
        digito.push(user)
    }
}while (user!==0) {
    console.log(digito)
}
//Ejercio4
const palabras=[]
let user1;
do{
    user1= prompt("escribe algo (paa finalizar nada)")
    if (user1!=="") {
        palabras.push(user1)
    }
}while (user1!=="") {
    console.log(palabras)
}
//Ejercio5
let dia;
let user2;
do {
    user2= prompt("Ingresa en el dia que estas")
    if (user2!=="domingo") {
        alert("Falta super poquito")
    }else{
        alert("ve a descansar")
    }
   
} while (user2 !=="domingo"){
    
}