'use strict'

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const nom = document.getElementById('name');
const message = document.getElementById('message');
const errorName = document.getElementById('errorName');
const errorMessage = document.getElementById('errorMessage');
const errorEmail = document.getElementById('errorEmail');
const successContent = document.getElementById('success');
const maRow = document.getElementById('row1');

let verifEmail = true;
let verifName = true;
let verifMessage = true;

function validationEmail(mail){
    //expression reguliere pour test le mail
    if(/^[a-zA-Z-0-9._-]+@([a-zA-Z-0-9-])+(\.[a-zA-Z]{2,})*$/.test(mail)){
        return true;
    }else{
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
});

form.addEventListener('submit',function (event){
    event.preventDefault(); //on désactive le comportement natif de l'évènement submit
    
    //gestion email
    if(validationEmail(email.value)){
        errorEmail.innerText = "";
        errorEmail.classList.remove('alert');
        errorEmail.classList.remove('alert-danger');
        errorEmail.classList.remove('btn-block');
    }else{
        errorEmail.setAttribute('class','alert alert-danger btn-block');
        errorEmail.innerText = "Mail non conforme";
        verifEmail = false;
    }
    

    //gestion du nom
    if((nom.value)){
        errorName.innerText = "";
        errorName.classList.remove('alert');
        errorName.classList.remove('alert-danger');
        errorName.classList.remove('btn-block');
    }else{
        errorName.setAttribute('class','alert alert-danger btn-block');
        errorName.innerText = "Entrez un nom";
        verifName = false;
    }

    //gestion du message
    if((message.value)){
        errorMessage.innerText = "";
        errorMessage.classList.remove('alert');
        errorMessage.classList.remove('alert-danger');
        errorMessage.classList.remove('btn-block');
    }else{
        errorMessage.setAttribute('class','alert alert-danger btn-block');
        errorMessage.innerText = "Entrez un message";
        verifMessage = false;
    }

    if(verifEmail && verifName && verifMessage){
        //s'il n'y a aucune erreur, on crée un élément juste après la balise form.
        let divSuccess = document.createElement('div'),
            textDivSuccess = document.createTextNode('');
            divSuccess.appendChild(textDivSuccess); //j'associe le texte a l'element créé
            form.insertBefore(divSuccess,maRow);
        successContent.textContent = "Tous les champs sont corrects";
        successContent.setAttribute('class','alert alert-success btn-block');
    }
})
