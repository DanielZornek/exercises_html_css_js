var idade = 19
console.log(`você têm ${idade} anos`)

if ( idade < 16) {

    console.log("Não Vota")
}else{

    if(idade < 18 || idade > 65){

        console.log("Voto Opcional")
    }else{

        if ( idade > 18 || idade == 18 ){//18 >= também funciona

            console.log("Você obrigatoriamente deve votar!!!")
        }
    }
}