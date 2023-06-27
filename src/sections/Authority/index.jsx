import React, { useContext } from 'react'
import Team from '../../assets/team.jpg'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ScrollContext } from '../../contexts/scroll'
import styles from './Authority.module.css'

const Link = ({ href, className, children }) => (
    <a className={`${className} ${styles.link}`} href={href} target='_blank' rel='noreferrer'>{children}</a>
)

const Authority = () => {
    const { authorityRef } = useContext(ScrollContext)

    return (
        <div className={styles.section} ref={authorityRef}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Especialistas em Marketing Digital com um Portfólio de Sucesso!</h1>
                <h2 className={styles.subtitle}>Mais de 05 anos de experiência ajudando empresas a alcançar o topo do mercado.</h2>
                <div className={styles.socials}>
                    <Link href='https://www.facebook.com/AEGMEDIAMKT'><BsFacebook /></Link>
                    <Link href='https://www.instagram.com/aegmedia/'><BsInstagram /></Link>
                    <Link href='https://www.linkedin.com/company/aeg-mediaa/'><BsLinkedin /></Link>
                </div>
            </div>
            <div className={styles.wrapper} style={{ alignItems: 'center' }}>
                <img className={styles.image} src={Team} alt="" />
            </div>
        </div>
    )
}

export default Authority