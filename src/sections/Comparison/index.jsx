import React from 'react'
import BtnContact from '../../components/BtnContact'
import growing from '../../assets/growing.png'
import descending from '../../assets/descending.png'
import styles from './Comparison.module.css'

const Comparison = () => {
    return (
        <div className={styles.section}>
            <div style={{ textAlign: 'center' }}>
                <h1 className={styles.title}>É MUITO CARO não estar no Digital!</h1>
                <h2 className={styles.subtitle}>A cada dia sem ação, você perde clientes antigos, novos e em potencial.</h2>
            </div>
            <div className={styles.images}>
                <div className={styles.card}>
                    <img src={descending} alt="" />
                    <p><span style={{ color: 'var(--red)' }}>SEM</span> AEG Media</p>
                </div>
                <div className={styles.card}>
                    <img src={growing} alt="" />
                    <p><span style={{ color: 'var(--primary)' }}>COM</span> AEG Media</p>
                </div>
            </div>
            <BtnContact />
        </div>
    )
}

export default Comparison