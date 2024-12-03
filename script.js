let inputs= document.getElementById("email");
let successMessage = document.getElementById("success-message");
let form = document.getElementById("form");
let userEmail= document.getElementById('user-email');
let messageError = document.getElementById('error-message');
console.log(inputs);
console.log(successMessage);
console.log(form);
console.log(userEmail);
console.log(messageError);
let i=1;
let values ;
//prevent the page to reload

      form.addEventListener('submit',function(e){
         e.preventDefault() ;

         if( inputs.value === '' || !inputs.value.match(/^([A-Za-z0-9_\-\.])*\@([A-Za-z0-9_\-\.])*([A-Za-z]{2,4})$/)){
            // to show the error state when the input is empty or don't match the email form
            messageError.style.display='inline';
            inputs.style.backgroundColor='hsl(4, 100%, 67%, 0.1)';
            inputs.style.borderColor='hsl(4, 100%, 67% )';
         }
         else{
          
            //   to show the successMessage
               userEmail.innerHTML = inputs.value ;
               form.style.display='none';
               successMessage.style.display='block';
               values =inputs.value ;
         }     
      })
       // function to dismiss the message
      function showform(){
         form.style.display='block';
         successMessage.style.display='none';
         inputs.value = ''; 
      }
//   function to fill the input box
function fill(){
    if( i<2){
          //  to hide the error state
     messageError.style.display='none';
     inputs.style.backgroundColor='hsl(0, 0%, 100%)';
     inputs.style.borderColor='black';
     // to put a value in the input
     inputs.value ='ash@loremcompany.com';
    }
    else{
       //  to hide the error state
     messageError.style.display='none';
     inputs.style.backgroundColor='hsl(0, 0%, 100%)';
     inputs.style.borderColor='black';
    }
    
     i++;
     console.log(i);
}
