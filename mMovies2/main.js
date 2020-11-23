
const formValidation = () => {
    const userNmae = document.querySelector('.usernameB').value;
   const Password  = document.querySelector('.passwordB').value;
 
   console.log(userNmae)
   if (userNmae === Password) {
       console.log('username and password are correct')
   } else {
       console.log('Username and password are incorrect')
   }
   }

if (userNmae === 'Oluwapelumi') {
    console.log('Password is correct')
}else {
    console.log('Input correct password')
}
const button = document.querySelector('.submit')
button.addEventListener('click', formValidation)
document.addEventListener('keypress', event)


const event = (event) => {
if (event.keyCode === 13) {
  formValidation();
} 
}



