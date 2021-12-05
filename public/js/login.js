 let emailCorrecto = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
 let form= document.querySelector('form')
 let inputCorreo= document.querySelector('.validation')
 let inputPassword= document.querySelector('.validation1')
 let validationCorreo = document.querySelector('.validacionCorreo')
 let validationContrasenia = document.querySelector('.validationContrasenia')
 form.addEventListener('submit',(e)=>{
    if((emailCorrecto.test(inputCorreo.value))=== false){
        (validationCorreo.innerHTML='Debe ser un correo') && (e.preventDefault())
    }else{
        (validationCorreo.innerHTML='')
    }
    if(inputPassword.value.length<= 7){
        (validationContrasenia.innerHTML= 'Debe tener al menos 8 caracteristicas') && (e.preventDefault())
    }else{
        validationContrasenia.innerHTML=''
    }
 })
 
 
 
 /* window.addEventListener('load',()=>{
    window.addEventListener('submit',(e)=>{
    let errores = []
    let input1 = document.querySelector('.validation')
    let formin= document.querySelector('.form-in')
        if(input1.value.length<40){
            (errores.push('faltan')) &&
            (formin.innerHTML+= '<div> error </div>') 
            
        }
    let input2 = document.querySelector('#hola')
        if(input2.value.length<40){
            errores.push('erorrr')
        }
       // if(errores.length > 0){
        //    e.preventDefault()
        //console.log(errores)
       
    //}
    e.preventDefault()
    })
})*/























/* let formulario = document.getElementById('formularioo')
let inputs = document.querySelectorAll('#formularioo input')

const validations = (e)=>{
    console.log(e.target.name)
}

inputs.forEach((input)=> {
    input.addEventListener('keyup',validations)
    input.addEventListener('blue',validations)
});


formulario.addEventListener('submit',function(e){
    e.preventDefault();
})*/
