import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import'font-awesome/css/font-awesome.min.css'
import React from 'react'

import Nav from '../components/Nav'
import Home from '../components/Home/Home'
import Footer from '../components/Footer'

export default props =>
<div className='app'>
    <Nav />
    <Home />
    <Footer />
</div>