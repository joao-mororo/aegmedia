import React, { useContext } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { ScrollContext } from '../../contexts/scroll'
import styles from './ToTopButton.module.css'

const ToTopButton = () => {
    const { scrollToSection, homeRef } = useContext(ScrollContext)

    function scrollFunction() {
        let mybutton = document.getElementsByClassName('toTopButton')[0]
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }

    window.onscroll = function () { scrollFunction() };

    return (
        <button 
            className={`${styles.button} toTopButton`} 
            onClick={() => scrollToSection(homeRef)} 
        >
            <IoIosArrowUp />
        </button>
    )
}

export default ToTopButton