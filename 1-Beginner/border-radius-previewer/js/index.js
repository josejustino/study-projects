let $ = document.querySelector.bind(document);

let inputTl = $('#input-tl');
let inputTr = $('#input-tr');
let inputBr = $('#input-br');
let inputBl = $('#input-bl');

document.addEventListener('keyup', function(){
   let surfaceBorder = document.querySelector('#surface').style;

   surfaceBorder.borderTopLeftRadius = inputTl.value ? `${inputTl.value}px` : 0;
   surfaceBorder.borderTopRightRadius = inputTr.value ? `${inputTr.value}px` : 0;
   surfaceBorder.borderBottomRightRadius = inputBr.value ? `${inputBr.value}px` : 0;
   surfaceBorder.borderBottomLeftRadius = inputBl.value ? `${inputBl.value}px` : 0;
}, false)
