const inputusrname = document.getElementById("usrname")
const inputpass = document.getElementById("pass")
const inputRep_pass = document.getElementById("Rep_pass")
const inputemail = document.getElementById("email")
const inputage = document.getElementById("Age")
const buttonRegister= document.getElementById("button")
const divError = document.getElementById("divError")
const inputcheck = document.getElementById("checkBox")
const asynchronous = document.getElementById("asynchronous")


buttonRegister.addEventListener("click", (event)=>{
    event.preventDefault();
    var errorText = ""

    const checkTerms = inputcheck.checked
    if(!checkTerms){
        errorText = "You have to agree on Terms and Condition"
    }

    const email = inputemail.value
    const n = email.length;
    if(email[n-1]!= 'm' || email[n-2]!= 'o'  || email[n-3]!= 'c' || email[n-4]!= '.' || email[n-5]!= 'l'  || email[n-6]!= 'i' || email[n-7]!= 'a'  || email[n-8]!= 'm' || email[n-9]!= 'g' || email[n-10]!= '@'  ){
        errorText = "Must be @gmail account"
    }

    const number = inputage.value
    if(number < 13){
        errorText = "Must be older than 13th"
    }

    const password = inputpass.value
    if(password.length < 8){
        errorText = "Password length can't be less than 8 characters"
    }

    const convpassword = inputRep_pass.value
    if(convpassword != password){
        errorText = "Password confirmation didn't match"
    }


    const text = inputusrname.value;
    if(text.length< 5){
        errorText = "Username length can't be less than 5 characters"

    }
    

    if(errorText == ""){
        alert("Register Successful")
    }

     divError.innerText = errorText
})