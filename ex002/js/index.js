function verificar() {
    var data = new Date();
    var anoatual = data.getFullYear();
    var anonascimento = window.document.getElementById('anonascimento');
    var resultado = window.document.getElementById('resultado')
    var sexo = window.document.getElementsByName('sexo');
    var idade = anoatual - anonascimento.value;
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.display = 'block'
    img.style.marginInline = 'auto'
    if (anonascimento.value.length == 0) {
        window.alert('Digite o ano');
    } else if (anonascimento.value > anoatual) {
        resultado.innerHTML = 'Esse ser ainda não nasceu!'
        img.src = './img/cegonha.jpg'
    } else if(anonascimento.value <= anoatual - 130){
        resultado.innerHTML = `Esse ser já morreu! ele(a) teria ${idade} anos!`
        img.src = './img/mumia.jpg'
    } else {
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 15) {
                //Criança
                img.src = './img/kid-man.jpg'
            } else if (idade < 25) {
                //Jovem
                img.src = './img/young-man.jpg'
            } else if (idade < 55) {
                //Adulto
                img.src = './img/adult-man.jpg'
            } else if (idade < 130) {
                //Velho
                img.src = './img/old-man.jpg'
            }
        } else {
            genero = 'Mulher'
            if (idade < 15) {
                //Criança
                img.src = './img/kid-woman.jpg'
            } else if (idade < 25) {
                //Jovem
                img.src = './img/young-woman.jpg'
            } else if (idade < 55) {
                //Adulto
                img.src = './img/adult-woman.jpg'
            } else if (idade < 130) {
                //Velho
                img.src = './img/old-woman.jpg'
            }
        }
        resultado.innerHTML = `É ${genero}! Tem ou completará ${idade} esse ano!`
    }
    resultado.appendChild(img)

}

