import React, { useContext } from 'react'
import Logo from '../../assets/logo.png'
import { ScrollContext } from '../../contexts/scroll'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { scrollToSection, servicesRef, commentsRef, authorityRef, contactRef } = useContext(ScrollContext)

  return (
    <div className={styles.wrapper}>
        <img className={styles.logo} src={Logo} alt="logomarca" />
        <nav className={styles.nav}>
            <button className={styles.button} onClick={() => scrollToSection(servicesRef)}>Serviços</button>
            <button className={styles.button} onClick={() => scrollToSection(commentsRef)}>Comentários</button>
            <button className={styles.button} onClick={() => scrollToSection(authorityRef)}>Quem somos</button>
            <button className={styles.button} onClick={() => scrollToSection(contactRef)}>Contato</button>
        </nav>
    </div>
  )
}

export default Navbar