let input = document.querySelector('#nombreJuego')
input.addEventListener('keypress',(e)=>{
    if(!(e.keyCode>=32 && e.keyCode<=122)){
        e.preventDefault()
    }
})
let input2= document.querySelector('#precio')
    input2.addEventListener('keypress',(e)=>{
        if(!(e.keyCode>= 48 && e.keyCode<=57)){
            e.preventDefault()
        }
    })
window.addEventListener('load',()=>{
    let form= document.querySelector('form')
    let inputId= document.querySelector('.input')
    let inputDescription= document.querySelector('#detalleJuego')
    let description= document.querySelector('.description')
    let errors = []
    form.addEventListener('submit',(e)=>{
        if(input.value==""){
            (inputId.innerHTML= '<div>Este campo no puede estar vacío</div>') && (e.preventDefault())
        }else if(input.value.length<=5){
            (inputId.innerHTML = '<div>Este campo debe tener 5 caracteres</div>') && (e.preventDefault())
        }else if(!(input.value=="")&&!(input.value.length<=5)){
            errors =[]
        }if(inputDescription.value.length<20){
            (description.innerHTML= '<div>Este campo debe tener 20 caracteres</div>') && (e.preventDefault())
        }else if(inputDescription.value.length==""){
            (description.innerHTML= '<div>Este campo no puede estar vacío</div>') && (e.preventDefault())
            errors =[]
        }
        
        
    })
})


//let input = document.querySelector('#nombreJuego')
//input.addEventListener('keypress',(e)=>{
//    if((!(e.keyCode >= 48 && e.keyCode <= 57)) ){
 //       e.preventDefault()
//    }//else if(!(e.keyCode >= 97 && e.keyCode <= 122) ){
//       // e.preventDefault()
//    //}
//})
