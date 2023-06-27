import React from 'react'
import BtnContact from '../../components/BtnContact'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.section}>
            <h1 className={styles.title}>
                Alavanque seus resultados com <span className={styles.span}>AEG MEDIA</span>
            </h1>
            <BtnContact />
        </div>
    )
}

export default Home