import React from 'react'
import './Main.css'
import Aside from './Aside'

import Image from '../img/Perfil.png'


import Perfil from './Perfil'

const aboutMe = 'Oi! Sou o Leandro Gomes, Desenvolvedor Front-End de São Paulo, Brasil. Atualmente estou estudando React, Javascript e Design. Tenho experiência razoável em Desenvolvimento Web.'

 const Main = (props) => 
    <main className="main">
        <Aside />
        <Perfil name='Leandro Gomes' about={aboutMe} />
        
        <img src={Image} alt="" />
    </main>

export default Main