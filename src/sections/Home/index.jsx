import React, { useContext } from 'react'
import BtnContact from '../../components/BtnContact'
import { ScrollContext } from '../../contexts/scroll'
import styles from './Home.module.css'

const Home = () => {
    const { homeRef } = useContext(ScrollContext)

    return (
        <div className={styles.section} ref={homeRef}>
            <h1 className={styles.title}>
                Alavanque seus resultados com <span className={styles.span}>AEG MEDIA</span>
            </h1>
            <BtnContact />
        </div>
    )
}

export default Home