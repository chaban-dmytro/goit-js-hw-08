!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector(".feedback-form input"),a=document.querySelector(".feedback-form textarea");e.addEventListener("input",(function(e){"email"===e.target.name?l.email=e.target.value:l.message=e.target.value;localStorage.setItem("feedback-form-state",JSON.stringify(l))})),function(){if(0!==localStorage.length){var e,l,r=JSON.parse(localStorage.getItem("feedback-form-state"));t.value=null!==(e=r.email)&&void 0!==e?e:null,a.value=null!==(l=r.message)&&void 0!==l?l:null}}();var l={}}();
//# sourceMappingURL=03-feedback.51e5136f.js.map