import React from 'react'
import './Header.css'

const Header = (props) =>
    <header className="header">
        <ul>

            {/* Link para email */}
            <li><a href="https://mail.google.com/mail/u/?authuser=leandrogomesdeoliveira2@gmail.com" target="_blank" rel="noreferrer">Email</a></li>

            {/* Link para Whatsapp */}
            <li><a href="https://api.whatsapp.com/send?phone=5511974562181&text=Oi%20Leandro,%20" target="_blank" rel="noreferrer">Whatsapp</a></li>
        </ul>
    </header>

export default Header 