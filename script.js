function carregar() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    var data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Que horas são? ${hora} horas`
// horas manha
    if (hora >= 0 && hora < 12) {
        img.src = "img/manha1.png"
        document.body.style.background = "url('img/manha.jpg')";

    }
// horas tarde
    else if (hora >= 12 && hora <= 18) {
        img.src = "img/tarde1.png"
        document.body.style.background = "url('img/tarde.jpg')";

    }
// horas noite
       else {
        img.src = "img/noite1.png"
        document.body.style.background = "url('img/noite.jpg')";

    }

}