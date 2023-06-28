import React, { useState, useEffect, useContext } from "react";
import Logo from "../../assets/logo.png";
import SocialButton from "./SocialButton";
import OptionButton from "./OptionButton";
import { LINKS } from "../../data/constants";
import { ScrollContext } from "../../contexts/scroll";
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import styles from './MobileMenu.module.css'

const Menu = () => {
    const { scrollToSection, servicesRef, commentsRef, authorityRef, contactRef } = useContext(ScrollContext)
    const [menu, setMenu] = useState(false);
    const menuIsOpen = () => setMenu(!menu)
    const iconSize = 40
    const socialIconSize = 27

    // remove body scroll when menu is open
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        if (menu) {
            body.style.overflowY = 'hidden'
        } else {
            body.style.overflowY = 'scroll'
        }
    }, [menu])

    const closeAndScroll = (section) => {
        menuIsOpen()
        scrollToSection(section)
    }

    return (
        <>
            <img className={styles.home_logo} src={Logo} alt="logomarca" />
            {menu ? (
                <div className={styles.menu}>
                    <button className={styles.closeMenu} onClick={() => menuIsOpen()}>
                        <HiX size={iconSize} />
                    </button>

                    <div className={styles.header}>
                        <img className={styles.logo} src={Logo} alt="logomarca" />
                    </div>
                    <div className={styles.options}>
                        <OptionButton onClick={() => closeAndScroll(servicesRef)}>Serviços</OptionButton>
                        <OptionButton onClick={() => closeAndScroll(authorityRef)}>Quem somos</OptionButton>
                        <OptionButton onClick={() => closeAndScroll(commentsRef)}>Comentários</OptionButton>
                        <OptionButton onClick={() => closeAndScroll(contactRef)}>Contato</OptionButton>
                    </div>
                    <div className={styles.socials}>
                        <SocialButton as="a" href={LINKS.facebook}><BsFacebook size={socialIconSize} /></SocialButton>
                        <SocialButton as="a" href={LINKS.instagram}><BsInstagram size={socialIconSize} /></SocialButton>
                        <SocialButton as="a" href={LINKS.linkedin}><BsLinkedin size={socialIconSize} /></SocialButton>
                    </div>
                </div>
            ) : (
                <button className={styles.openMenu} onClick={menuIsOpen}>
                    <HiMenuAlt3 size={iconSize} />
                </button>
            )}
        </>
    )
}

export default Menu