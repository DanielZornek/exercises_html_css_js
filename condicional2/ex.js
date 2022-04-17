var agora = new Date()
var hora = agora.getHours()// pegando o horario do dispositivo
console.log(`Agora são exatamente ${hora} horas`)

if ( hora < 12 && hora >= 5){

    console.log("Bom dia!!")
}else if( hora >= 12 && hora < 18){

    console.log("Boa Tarde!!")
}else if ( hora >= 0 && hora < 5) {

    console.log("SAI DOS ANIME DOS GAME VAI DURMI")
}

else{
    console.log("Boa Noite!")
}