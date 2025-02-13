const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input') 
const email_input = document.getElementById('email-input') 
const password_input = document.getElementById('password-input') 
const repeat_password_input = document.getElementById('repeat-password-input') 

form.addEventListener('submit', (e) => {

 let errors = []

 if(firstname_input){
    //If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.ariaValueMax, email_input.value, password_input.value, repeat_password_input.value)
 }
 else{
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value)
 }

 if(errors.length > 0){ 
    // If there are any errors
    e.preventDefault()
 }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = []

    if(firstname === '' || firstname ==null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email ==null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password ==null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}