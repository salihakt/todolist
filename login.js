var username=document.getElementById("feild1");
var err1=document.getElementById("err1")
var pwd =document.getElementById("feild2");
var err2 =document.getElementById("err2")

function validatename(){
    if(username.value.trim()==""){
        err1.innerText="username cannot be empty"
        username.style.border="4px solid red"; //for empty answer
        return false
    }   
       else{
        err1.innerText=""; 
        username.style.border="5xp  solid green"
    }
    return true
}
function validatepwd(){
    if(pwd.value.trim()==""){
        err2.innerText="password should not be empty"
        pwd.style.border="2px solid red";      
        return false
    }
    else{
        err2.innerText="";
        pwd.style.border="5px solid green"
        
    }
    return true 
    

}


function verify(callback){
    console.log('hiii');
    event.preventDefault()
    if(!validatename()|| !validatepwd()){
        return false
    }
    else{
        if(username.value == 'admin' && pwd.value == '12345') 
        callback()
    }
}
  
function redirect(){
    window.location = 'list.html'
}