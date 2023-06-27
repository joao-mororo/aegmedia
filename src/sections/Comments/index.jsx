import React, { useContext } from 'react'
import { ScrollContext } from '../../contexts/scroll'
import comments from '../../data/comments'
import styles from './Comments.module.css'

const Comments = () => {
    const { commentsRef } = useContext(ScrollContext)

    return (
        <div className={styles.section} ref={commentsRef}>
            <h1 className={styles.title}>Veja o que nossos clientes têm a dizer sobre a <span style={{color: 'var(--primary)'}}>AEG MEDIA</span></h1>
            {comments.map((item, i) => (
                <div className={styles.comment} key={i}>
                    <img className={styles.image} src={item.pic} alt="" />
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.msg}>"{item.msg}"</p>
                </div>
            ))}
        </div>
    )
}

export default Comments