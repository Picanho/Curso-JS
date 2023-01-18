function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
//Bom Dia!
img.src = 'https://uploads.jovemnerd.com.br/wp-content/uploads/2018/12/como-treinar-seu-dragao-3-furia-da-noite-1210x544.jpg'
document.body.style.background = '#5BC0F8'
}  else if (hora >= 12 && hora < 18) {
    //Boa Tarde!
    img.src = 'http://pm1.narvii.com/7666/30849c7e2c8ccd9cfc56672f4116ddc6b3be84b9r1-1080-1920v2_uhq.jpg'
    document.body.style.background = '#FAAB78'
} else {
    //Boa Noite!
    img.src = 'http://3.bp.blogspot.com/--MhupkhMEbc/UZ7c8wquGNI/AAAAAAAAASw/ASVP1BIXRk4/s1600/fury2.jpg'
    document.body.style.background = '#515154'
}

}