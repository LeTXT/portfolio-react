import React from "react";

import GitHub from '../img/github.svg'
import Instagram from '../img/instagram.svg'
import Linkedin from "../img/linkedin.svg"

const Aside = () => 
<aside>

    {/* Link e imagem para o GitHub */}
    <a href="https://github.com/LeTXT" target="_blank" rel="noreferrer"><img src={GitHub} alt="Github" /></a>

    {/* Link e imagem para o Instagram */}
    <a href="https://www.instagram.com/le.d.oliveira/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" /></a>
    
    {/* Link e imagem para o LinkedIn */}
    <a href="https://www.linkedin.com/in/leandrogdo/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></a>
</aside>

export default Aside