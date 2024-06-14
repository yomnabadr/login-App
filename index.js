const signUpName = document.querySelector("#signUpName")
const signUpEmail= document.querySelector("#signUpEmail")
const signUpPassword = document.querySelector("#signUpPassword")
const signUpBtn = document.querySelector("#signUpBtn")
const emailExist = document.querySelector("#emailExist")

let users = [];

if(localStorage.getItem("usersinf") !=null){
    users = JSON.parse(localStorage.getItem("usersinf"));
    
}



function signUp(){
    if(signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == ""){
        emailExist.innerHTML = `<span class ="text-danger my-3" > All Inputs are requried</span>`
    }
    else{
    for (let i = 0; i < users.length; i++) {
       if(users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
        emailExist.innerHTML = `<span class ="text-danger my-3" > Email already exist </span>`
           
       }                                                 
        
    }
        getUserDate()
          emailExist.innerHTML = `<span class ="text-success my-3" > success</span>`
    }
}

function getUserDate(){
   let user = {
        name : signUpName.value,
        email : signUpEmail.value,
        pass : signUpPassword.value,
    }
    users.push(user)
    localStorage.setItem("usersinf" , JSON.stringify(users))
    location.href='index.html'

}






signUpBtn?.addEventListener("click" , function(){
    signUp()
})



const signEmail = document.querySelector("signEmail")
const signPassword = document.querySelector('signPassword')
const logBtn = document.querySelector(" logBtn")
const checkInput = document.querySelector("checkInput")



function signIn(){
    if(signEmail.value == "" || signPassword.value == ""){
        checkInput.innerHTML = `<span class ="text-danger my-3" > All Inputs are requried</span>`
    }
    else{
        for (let i = 0; i < users.length; i++) {
           if(users[i].email.toLowerCase == signEmail.value.toLowerCase && users[i].pass == signPassword.value){
              checkInput.innerHTML =  `<span class ="text-success my-3" > success</span>`
              localStorage.setItem("userName" , JSON.stringify(users[i].name))
              location.href='home.html'
           }
            
        }
         checkInput.innerHTML = `<span class ="text-danger my-3" > You Should Sign In</span>`
    }
}
    


logBtn?.addEventListener("click" , function(){
    signIn()
})


const homeUser = document.querySelector("#homeUser")
let loguser = localStorage.getItem("userName")

homeUser.innerHTML = `<h2 class = 'text-info'> welcom${loguser}</h2>`