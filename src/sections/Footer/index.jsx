import React from 'react'
import Logo from '../../assets/logo.png'
import { LINKS } from '../../data/constants'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs' 
import styles from './Footer.module.css'

const Link = ({ href, className, children }) => (
    <a className={`${className} ${styles.link}`} href={href} target='_blank' rel='noreferrer'>{children}</a>
)

const Footer = () => {
    return (
        <footer className={styles.section}>
            <img className={styles.logo} src={Logo} alt="" />
            <div className={styles.socials}>
                <Link href={LINKS.facebook}><BsFacebook /></Link>
                <Link href={LINKS.instagram}><BsInstagram /></Link>
                <Link href={LINKS.linkedin}><BsLinkedin /></Link>
                <Link href={LINKS.whatsapp}><BsWhatsapp /></Link>
            </div>
            <p className={styles.copyright}>AEG Media &#169; Copyright {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer