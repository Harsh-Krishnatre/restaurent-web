import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <div className=' bg-yellow-300 h-screen'>
        <Header />
        <nav className='h-[10vh] bg-green-600'>
            <ul className='flex justify-center items-center gap-32 py-1 underline'>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
        <h1>Home</h1>
        <Footer/>
    </div>
  )
}

export default Home