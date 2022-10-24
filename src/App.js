import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import './App.css'
import Ts1 from './components/Ts1';
import Ts2 from './components/Ts2';
import Navbar from './components/Navbar';
import { NavbarElements } from './components/NavbarElements.js'
import About from './components/About';
import SignUp from './components/Signup';

const App = () => {
    return (
        <div className="app">
            <div className='main'>
            <Navbar />
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Ts1 />} />
                            <Route path='/Ts2' element={<Ts2 />} />
                            <Route path='/About' exact component={<About />} />
                            <Route path='/Signup' exact component={<SignUp />} />
                        </Routes>
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default App
