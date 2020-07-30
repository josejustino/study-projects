let inputTl = document.querySelector('#input-tl');

inputTl.addEventListener('keyup', function(){
   let surfaceBorder = document.querySelector('#surface');

   surfaceBorder.style.borderTopLeftRadius = inputTl.value ? `${inputTl.value}px` : 0;

   console.log(surfaceBorder)
   console.log(inputTl)
   console.log(inputTl.value)
   console.log(surfaceBorder.style.borderTopLeftRadius)
}, false)
