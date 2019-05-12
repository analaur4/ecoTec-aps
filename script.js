const imagens = document.querySelectorAll('img');
const navMenu = document.querySelector('.nav-menu');
const menuHamburguer = document.querySelector('.menu-hamburguer');
const btnEnviar = document.querySelectorAll('input');
const participarSorteio = document.querySelector('.sorteio-forms');
const formulario = document.querySelector('form');

function aparecerParagrafo1(){
    const paragrafo = document.querySelectorAll("p");
    if(paragrafo[0].style.display  == 'none' && paragrafo[1].style.display == 'none'){
        paragrafo[0].style.display = 'block';
        paragrafo[1].style.display = 'block';
    }

    else{
        paragrafo[0].style.display = 'none';
        paragrafo[1].style.display = 'none';
    }
}

function aparecerParagrafo2(){
    const paragrafo = document.querySelectorAll("p");
    if(paragrafo[2].style.display  == 'none'){
        paragrafo[2].style.display = 'block';
    }

    else{
        paragrafo[2].style.display = 'none';
    }
}

function atualizarMenu(){
    navMenu.classList.toggle('abrirMenu');
    menuHamburguer.classList.toggle('ativo');
}

function enviarEmail(){
    participarSorteio.innerHTML = '<h2 style="font-size:14pt; color: black">E-mail cadstrado com sucesso!</h2>';
}

function entrarContato(){
    formulario.innerHTML = '<h2 style="font-size: 14pt">Mensagem enviada!</h2><img src="img/icon-checked.png" alt="Checado">'
}

imagens[1].onclick = aparecerParagrafo1;
imagens[2].onclick = aparecerParagrafo2;
menuHamburguer.onclick = atualizarMenu;
btnEnviar[1].onclick = enviarEmail;
btnEnviar[5].onclick = entrarContato;