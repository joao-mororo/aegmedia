import React from 'react'
import BtnContact from '../../components/BtnContact'
import SadMan from '../../assets/problem.jpg'
import { useMediaQuery } from 'react-responsive'
import styles from './Problem.module.css'

const ImgWrapper = () => (
    <div className={styles.wrapper}>
        <img className={styles.image} src={SadMan} alt="Sad man" />
    </div>
)

const Problem = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <div className={styles.section}>
            <div className={styles.wrapper}>
                <h1>Estagnado no Mercado? <span className={styles.span}>É Hora de Mudar o Jogo!</span></h1>
                {isTabletOrMobile && <ImgWrapper />}
                <h2>Seu negócio merece mais visibilidade e crescimento contínuo.</h2>
                <BtnContact />
            </div>
            {!isTabletOrMobile && <ImgWrapper />}
        </div>
    )
}

export default Problem