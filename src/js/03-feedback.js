const formEl = document.querySelector( '.feedback-form' );
const formInputEl = document.querySelector( '.feedback-form input' )
const formTextareaEl = document.querySelector( '.feedback-form textarea' )

formEl.addEventListener( 'input', onInput );

setInputFromLocaleStorage();

function setInputFromLocaleStorage() {
  if ( !isLocalStorageEmpty() ) {
    // console.log( 'not empty' );
    const parseObj = JSON.parse(localStorage.getItem('feedback-form-state'))
    formInputEl.value = parseObj.email ?? null;
    formTextareaEl.value = parseObj.message ?? null;
  } 
}

function isLocalStorageEmpty() {
  return ( localStorage.length === 0 );
}

const obj = {}

function onInput( event ) {
  if ( event.target.name === 'email' ) {
    obj.email = event.target.value;
  } else {
    obj.message = event.target.value;
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}