import React, { useContext } from 'react'
import Team from '../../assets/team.jpg'
import { useMediaQuery } from 'react-responsive'
import { LINKS } from '../../data/constants'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ScrollContext } from '../../contexts/scroll'
import styles from './Authority.module.css'

const Link = ({ href, className, children }) => (
    <a className={`${className} ${styles.link}`} href={href} target='_blank' rel='noreferrer'>{children}</a>
)

const ImgWrapper = () => (
    <div className={styles.wrapper} style={{ alignItems: 'center' }}>
        <img className={styles.image} src={Team} alt="" />
    </div>
)

const Authority = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const { authorityRef } = useContext(ScrollContext)

    return (
        <div className={styles.section} ref={authorityRef}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Especialistas em Marketing Digital com um Portfólio de Sucesso!</h1>
                {isTabletOrMobile && <ImgWrapper />}
                <h2 className={styles.subtitle}>Mais de 05 anos de experiência ajudando empresas a alcançar o topo do mercado.</h2>
                <div className={styles.socials}>
                    <Link href={LINKS.facebook}><BsFacebook /></Link>
                    <Link href={LINKS.instagram}><BsInstagram /></Link>
                    <Link href={LINKS.linkedin}><BsLinkedin /></Link>
                </div>
            </div>
            {!isTabletOrMobile && <ImgWrapper />}
        </div>
    )
}

export default Authority