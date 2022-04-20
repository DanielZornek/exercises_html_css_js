function verificar(){

    var data =  new Date()
    var ano = data.getFullYear()/* full year pega os 4 digitos do ano ex:2022 */
    let fano = document.getElementById('textano')
    let res = document.querySelector('div#res')
    if ( fano.value.length == 0 || Number(fano.value) >  ano ){

        alert("Verifique os dados Novamente!!!")
    }else{

        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if ( fsexo[0].checked){

                genero = 'Homem'
                    if( idade >= 0 && idade < 12 ){
                        // Criança
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/childg.jpg')
                    }else if ( idade < 21 ){
                        // Jovem
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/trunks.jpg')
                    }else if ( idade < 50 ){
                        // Adulto
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/adultg.jpg')
                    }else {
                        // Idoso
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/kamev.jpg')

                    }

        }else if(fsexo[1].checked){

                genero = 'Mulher'

                if( idade >= 0 && idade < 10 ){
                    // Criança
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/panb.jpg')


                }else if ( idade < 21 ){
                    // Jovem
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/videl.jpg')


                }else if ( idade < 50 ){
                    // Adulto
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/bulma.jpg')

                }else {
                    // Idoso
                        img.style.width = '250px'
                        img.style.height = '250px'
                        img.style.borderRadius = '500px'
                        img.style.margin = '15px'
                        img.setAttribute('src', 'img/uranai.jpg')


                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}