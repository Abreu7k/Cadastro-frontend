import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import'font-awesome/css/font-awesome.min.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default props =>
<BrowserRouter>
    <div className='app'>
        <Nav />
        <Routes />
        <Footer />
    </div>
</BrowserRouter>