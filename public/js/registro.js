let inputEdad= document.querySelector('#edad')
inputEdad.addEventListener('keypress',(e)=>{
    if(!(e.keyCode >= 48 && e.keyCode <= 57)){
        e.preventDefault()
    }
})






 window.addEventListener("load",function(){
 window.addEventListener("submit",function(e){
    let form = document.querySelector("form");
    let nombre = document.querySelector("#nombre");
    let nombreValidacion = document.querySelector('.nombreValidacion')
    if(nombre.value.length < 2){
        (nombreValidacion.innerHTML='Este campo debe tener al menos dos caracteres') && (e.preventDefault())
        
    }else if (nombre.value == ""){
        (nombreValidacion.innerHTML='Este campo no puede estar vacío') && (e.preventDefault())
        
    }else{
        nombreValidacion.innerHTML=''
    }
    let email = document.querySelector("#email");
    let emailCorrecto = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
    let emailValidacion = document.querySelector('.emailValidacion')
    if((emailCorrecto.test(email.value))===false){
        (emailValidacion.innerHTML= 'Este campo debe tener mail') && (e.preventDefault())
    }else{
        emailValidacion.innerHTML= ''
    }
    let email1 = document.querySelector("#email1")
    let emailValidacion1= document.querySelector('.emailValidacion1')
    if(email1.value!=email.value){
        (emailValidacion1.innerHTML='Los emails no coinciden') && (e.preventDefault())
    }else{
        emailValidacion1.innerHTML=''
    }
    let password = document.querySelector("#password");
    let passwordValidation= document.querySelector('.passwordValidacion')

    if (password.value === ""){
        (passwordValidation.innerHTML = 'Campo obligatorio') && (e.preventDefault())
        
    }else if(password.value.length < 7){
        (passwordValidation.innerHTML = 'La contraseña debe tener al menos 8 letras') && (e.preventDefault())
        
    }else{
        passwordValidation.innerHTML = ''
    }
    let lastName = document.querySelector("#apellido");
    let apellidoValidacion = document.querySelector('.apellidoValidacion')
    if(lastName.value.length < 5){
        (apellidoValidacion.innerHTML= 'Este campo debe tener al menos 5 letras') && (e.preventDefault())
        
    }else if (lastName.value == "" || lastName.value == null){
        (apellidoValidacion.innerHTML= 'Este campo no puede estar vacio') && (e.preventDefault())
        
    }else{
        apellidoValidacion.innerHTML= ''
    }
    let password1= document.querySelector('#password1')
    let passwordValidation1= document.querySelector('.passwordValidacion1')
    if(password1.value!==password.value){
        (passwordValidation1.innerHTML='Constraseñas no coinciden') && (e.preventDefault())
    }else{
        passwordValidation1.innerHTML=''
    }

    let edad = document.querySelector("#edad")
    let edadValidation = document.querySelector("#edadValidacion")
    if(edad.value!== "" || edad.value ){
        (edadValidation.innerHTML="Debe poner una edad")
    }

    let categoria = document.querySelector("#categoria")
    let categoriaValidacion = document.querySelector("#categoriaValidacion")
    if(categoria.value== "Seleccionar"){
        (e.preventDefault()) && (categoriaValidacion.innerHTML="Debe seleccionar una categoria")  
    }

})




})