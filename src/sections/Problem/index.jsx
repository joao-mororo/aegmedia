import React from 'react'
import BtnContact from '../../components/BtnContact'
import SadMan from '../../assets/problem.jpg'
import styles from './Problem.module.css'

const Problem = () => {
    return (
        <div className={styles.section}>
            <div className={styles.wrapper}>
                <h1>Estagnado no Mercado? <span className={styles.span}>É Hora de Mudar o Jogo!</span></h1>
                <h2>Seu negócio merece mais visibilidade e crescimento contínuo.</h2>
                <BtnContact />
            </div>
            <div className={styles.wrapper}>
                <img className={styles.image} src={SadMan} alt="Sad man" />
            </div>
        </div>
    )
}

export default Problem