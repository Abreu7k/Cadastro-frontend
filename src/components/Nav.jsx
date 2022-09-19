import './Nav.css'
import React from 'react'

export default props =>
<aside className="Menu-area">
    <nav className="menu">
    <a href="#/">
        <i className='fa fa-home'></i> Início
    </a>
    <a href='#/users'>
        <i className='fa fa-users'> </i>Usuários
    </a>
    </nav>
</aside>