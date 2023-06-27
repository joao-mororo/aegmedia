import React from 'react'
import Logo from '../../assets/logo.png'
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
                <Link href="https://www.facebook.com/AEGMEDIAMKT"><BsFacebook /></Link>
                <Link href="https://www.instagram.com/aegmedia/"><BsInstagram /></Link>
                <Link href="https://www.linkedin.com/company/aeg-mediaa/"><BsLinkedin /></Link>
                <Link href="http://wa.me/5581991289676"><BsWhatsapp /></Link>
            </div>
            <p className={styles.copyright}>AEG Media &#169; Copyright {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer