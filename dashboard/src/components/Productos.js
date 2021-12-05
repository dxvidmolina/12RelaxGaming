import { response } from 'express';
import React, {Component} from 'react';


class Productos extends Component{

    constructor () {
        super ()

        this.state = {
            productosList : []
        }
    }

    apicall(url,consecuencia) {
        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(prod=>{
            this.setState({productosList: prod.data})
        })
        .catch(error => console.log(error))
    }

    render(){
    return(
        
        
            <div>
                
                <p>hola</p>

            </div>
        
     
    )
        

    
}
}

export default Productos;