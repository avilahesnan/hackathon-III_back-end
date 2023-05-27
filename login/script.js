const formulario = document.querySelector('.formulario');
const loginLink = document.querySelector('.login-link');
const cadastrarLink = document.querySelector('.cadastrar-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const contato = document.querySelector('.contato');
const contatoBtn = document.querySelector('.contato-active')

cadastrarLink.addEventListener('click', ()=> {
    formulario.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    formulario.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    formulario.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    formulario.classList.remove('active-popup');
});

contatoBtn.addEventListener('click', ()=> {
    contato.style.display = 'block';
});
