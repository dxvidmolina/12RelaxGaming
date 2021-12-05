let input2= document.querySelector('#precio')
    input2.addEventListener('keypress',(e)=>{
        if(!(e.keyCode>= 48 && e.keyCode<=57)){
            e.preventDefault()
        }
    })
let form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    let inputNombre = document.querySelector('#nombreJuego')
    let div1=document.querySelector('.nombreJuego')
    if(inputNombre.value==""){
        (div1.innerHTML='Este campo no puede estar vacio') && (e.preventDefault())
    }
    else if(inputNombre.value.length<5){
        (div1.innerHTML= 'Este campo debe tener al menos 5 letras') && (e.preventDefault())
    }else{
        div1.innerHTML=""
    }
    let div2 = document.querySelector('.precio')
    if(input2.value==""){
        (div2.innerHTML='Este campo no puede estar vacío') && (e.preventDefault())
    }else{
        div2.innerHTML=''
    }
    let genre=document.querySelector('#genre')
    let divGenre=document.querySelector('.genre')
    if(genre.value.length<=10){
        (divGenre.innerHTML='Debe tener valor válido') && (e.preventDefault())
    }else{
        divGenre.innerHTML='' 
    }
    let description= document.querySelector('#description')
    let divDescription= document.querySelector('.description')
    if(description.value.length<= 20){
        (divDescription.innerHTML='Este input debe tener al menos 20 palabras') && (e.preventDefault())
    }else{
        (divDescription.innerHTML='')
    }
})