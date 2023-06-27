import React from 'react'

import ToTopButton from './components/ToTopButton'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Problem from './sections/Problem'
import Comparison from './sections/Comparison'
import Solution from './sections/Solution'
import Authority from './sections/Authority'
import Comments from './sections/Comments'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import './App.css'

function App() {
    return (
        <>
            <ToTopButton />
            <Navbar />
            <Home />
            <Problem />
            <Comparison />
            <Solution />
            <Authority />
            <Comments />
            <Contact />
            <Footer />
        </>
    )
}

export default App
