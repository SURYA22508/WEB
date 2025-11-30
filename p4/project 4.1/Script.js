
document.getElementById("Registrationform").addEventListener("submit", function(event) {
    event.preventDefault();

    clearErrors();

    let name=document.getElementById('username').value;
    let mail=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    let isValid=true;

    if(name.length<3)
    {
        showError("usernameError","name contain atleast 3 charecters.");
        isValid=false;
    }
    const Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!Pattern.test(mail))
    {
        showError('emailError','Enter valid email.');
        isValid=false;
    }
    if(password.length<8)
    {
        showError('passwordError','atleast 8 char\'s');
        isValid=false;
    }

    if(isValid)
    {
        document.getElementById("successMessage").innerText='Successfuly';
        document.getElementById('Registrationform').reset();
    }

});

function showError(elementid,message){
    document.getElementsById(elementid).innerText=message;
}

function clearErrors(){

    document.getElementById("usernameError").innerText=" ";
    document.getElementById("emailError").innerText=" ";
    document.getElementById("passwordError").innerText=" ";

}