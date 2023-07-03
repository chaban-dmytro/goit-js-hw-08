const throttle = require( 'lodash.throttle' );
const formEl = document.querySelector( '.feedback-form' );
const formInputEl = document.querySelector( '.feedback-form input' );
const formTextareaEl = document.querySelector( '.feedback-form textarea' );
const formSubmitBtnEl = document.querySelector( '.feedback-form button' );

formEl.addEventListener( 'input', throttle(onInput, 500) );
formEl.addEventListener( 'submit', submitForm );

const obj = {}

setInputFromLocaleStorage();

function isLocalStorageEmpty() {
  return (localStorage.getItem('feedback-form-state') === null);
}

function setInputFromLocaleStorage() {
  if ( !isLocalStorageEmpty() ) {
    const parseObj = JSON.parse(localStorage.getItem('feedback-form-state'))
    formInputEl.value = parseObj.email ?? null;
    formTextareaEl.value = parseObj.message ?? null;
    obj.email = parseObj.email;
    obj.message = parseObj.message;
  } 
}

function onInput( event ) {
  if ( event.target.name === 'email' ) {
    obj.email = event.target.value;
  } else {
    obj.message = event.target.value;
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}

function submitForm( event ) {
  if ( formInputEl.value.length === 0 || formTextareaEl.value.length === 0 ) {
    alert( 'Всі поля повинні бути заповнені!' );
  } else {
    event.preventDefault();
    console.log(obj);
    localStorage.removeItem( 'feedback-form-state' );
    formInputEl.value = '';
    formTextareaEl.value = '';
    delete obj.email;
    delete obj.message;
  }
}

