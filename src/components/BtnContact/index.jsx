import React, { useContext } from 'react'
import { ScrollContext } from '../../contexts/scroll'
import styles from './BtnContact.module.css'

const BtnContact = ({className}) => {
  const { scrollToSection, contactRef } = useContext(ScrollContext)
  
  return (
    <button className={`${className} ${styles.button}`} onClick={() => scrollToSection(contactRef)}>
        QUERO VENDER MAIS!
    </button>
  )
}

export default BtnContact