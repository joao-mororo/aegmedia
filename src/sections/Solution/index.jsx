import React, { useContext } from 'react'
import BtnContact from '../../components/BtnContact'
import AllTheData from '../../assets/all_the_data.svg'
import { TbSocial, TbCode } from 'react-icons/tb'
import { IoMdMegaphone } from 'react-icons/io'
import { HiPaintBrush } from 'react-icons/hi2'
import { BsPcDisplay } from 'react-icons/bs'
import { ScrollContext } from '../../contexts/scroll'
import styles from './Solution.module.css'

const Icon = ({ children }) => (
    <span className={styles.icon}>{children}</span>
)

const Solution = () => {
    const { servicesRef } = useContext(ScrollContext)

    return (
        <div className={styles.section} ref={servicesRef}>
            <h1 className={styles.title}>Impulsione seu Negócio com nossas Estratégias de Marketing!</h1>
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={AllTheData} alt="" />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.list}>
                        <p><Icon><IoMdMegaphone /></Icon> Head Marketing</p>
                        <p><Icon><BsPcDisplay /></Icon> Tráfego Pago</p>
                        <p><Icon><HiPaintBrush /></Icon> Designer</p>
                        <p><Icon><TbSocial /></Icon> Social Media</p>
                        <p><Icon><TbCode /></Icon> Web Designer</p>
                    </div>
                    <BtnContact />
                </div>
            </div>
        </div>
    )
}

export default Solution