import React from "react";

import './Perfil.css'

const Perfil = (props) => {

    const aboutMe = () => {
        const array = [ 'Aprendendo Design' ,'Amante de Games', 'Apreciador de Cinema' ,'Louco por Ciência' ,'Sou desenvolvedor Front-End']

let i = 0


let teste = setInterval(() => i === array.length ? <p>{array[i = 0]}</p> : <p>{array[i++]}</p>, 3000)

return teste
}


return (
    <div className='perfil' >
        <h1>{props.name}</h1>
        <p>{props.about}</p>
        
    </div>

)}


export default Perfil

