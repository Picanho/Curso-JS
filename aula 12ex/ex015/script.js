function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.Value == 0 || fano.value > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10) {
            //criança
            img.src = 'https://recreio.uol.com.br/media/_versions/animacoes/zeze_os_incriveis_capa_cZV2Ykq_widemd.jpg'
        } else if (idade < 21) {
            //jovem
            img.src = 'https://pm1.narvii.com/6419/b8eef29778a6780d64a4c85b388510408f247786_hq.jpg'
        } else if (idade < 50) {
            //adulto
            img.src = 'https://yt3.googleusercontent.com/9Pu59LaMBrQpL_pj0BcssmUqQ4QxalFztb2NjwFqmzq5TaMZjTQ0QW5zHe_z1_uJU-bwuEU-eUM=s900-c-k-c0x00ffffff-no-rj'
        } else {
            //idoso
            img.src = 'https://pbs.twimg.com/media/CPCuGKuUAAEqKwM.jpg'
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //criança
            img.src = 'https://i.pinimg.com/originals/47/f9/db/47f9dbca7fa1b093c5f1c3153b1cc32b.gif'
        } else if (idade < 21) {
            //jovem
            img.src = 'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/04/lisa-1.jpg'
        } else if (idade < 50) {
            //adulto
            img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVHDuXEt-2-pp_oxPEkU-GRjVM80QBbX4hw&usqp=CAU'
        } else {
            //idoso
            img.src = 'https://www.chroniquedisney.fr/imgPerso/simpson/1990-jacqueline-bouvier-01.jpg'
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    res.style.textAlign = 'center'
}
}