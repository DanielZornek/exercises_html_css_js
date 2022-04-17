var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta 
    5 = Sexta
    6 = Sábado
*/

console.log(diaSem)

switch(diaSem){

    case 0: 
    console.log("DUMINGÃO QUEIMANDO GASULINA")
    break

    case 1:
    console.log("Segunda melhor dia da semana :)")
    break
    
    case 2: 
    console.log("Terça paia")
    break

    case 3:
    console.log("Quarta,ainda paia, mas com jogo do Vascão")
    break

    case 4:
    console.log("Quinta feira dia de A Praça é Nossa")
    break

    case 5:
    console.log("Sexta dia de Bagunça")
    break

    case 6:
    console.log("Sábado dia de dar PT")
    break

    default:
        console.log("[ERRO] dia inválido")
        break
}