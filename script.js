const form = document.querySelector("form");

function validateEmail(email){
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            email.focus;
      return emailRegex.test(email);
}

function setError(input, message){
       const inputControlElement = input.parentNode;
             inputControlElement.classList.remove('success');
             inputControlElement.classList.add('error');
       const smallElement = inputControlElement.querySelector('small');
             smallElement.classList.remove('message-success');
             smallElement.classList.add('message-error');
             smallElement.textContent = message;
}

function setSuccess(input, message){
      const inputControlElement = input.parentNode;
            inputControlElement.classList.remove('error');
            inputControlElement.classList.add('success');
      const smallElement = inputControlElement.querySelector('small');
            smallElement.classList.remove('message-error');
            smallElement.classList.add('message-success');
            smallElement.textContent = message;
            setTimeout(() => {
                inputControlElement.classList.remove('success');
                inputControlElement.querySelector('input').value="";
            }, "3000");
            
}

function validateEmailInput(){
      const inputElement = document.getElementById("email");
            inputElement.addEventListener('sumbit', (e)=>{
            e.preventDefault();
      })
      const email = inputElement.value.trim();

       if(email === ''){
            setError(inputElement, 'Email can not be empty')
       }
       else if(!(validateEmail(email))) {
            setError(inputElement, 'Please provide a valid email address');
       }
       else{
            setSuccess(inputElement, 'Thank you for subscription');
       }
}


form.addEventListener("submit", (e) =>{
       e.preventDefault();
       validateEmailInput();
})



