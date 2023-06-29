import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer } from 'react-toastify'

import ToTopButton from './components/ToTopButton'
import Navbar from './components/Navbar'
import Menu from './components/MobileMenu'
import Home from './sections/Home'
import Problem from './sections/Problem'
import Comparison from './sections/Comparison'
import Solution from './sections/Solution'
import Authority from './sections/Authority'
import Comments from './sections/Comments'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <ToTopButton />
            {isTabletOrMobile ? <Menu /> : <Navbar />}
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
