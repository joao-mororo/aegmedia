import React, {useContext, useState} from 'react'
import ContactUs from '../../assets/contact_us.svg'
import { BsWhatsapp } from 'react-icons/bs'
import { ScrollContext } from '../../contexts/scroll'
import styles from './Contact.module.css'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [message, setMessage] = useState("");
    const { contactRef } = useContext(ScrollContext)

    const submit = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || whatsapp === '' || message === '') {
            alert('Preencha todos os campos')
            return
        }

        alert('Enviado')
    }

    return (
        <div className={styles.section} ref={contactRef}>
            <img className={styles.image} src={ContactUs} alt="" />
            <form className={styles.form} onSubmit={(e) => submit(e)}>
                <h1 className={styles.title}>Nos deixe uma mensagem</h1>
                <input
                    className={`${styles.input}`}
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    className={`${styles.input}`}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <input
                    className={`${styles.input}`}
                    type="tel"
                    placeholder="WhatsApp"
                    onChange={(e) => setWhatsapp(e.target.value)}
                    value={whatsapp}
                />

                <textarea
                    className={`${styles.input} ${styles.message}`}
                    placeholder="Mensagem"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <section>
                    <input className={styles.submit} type="submit" value="Enviar" />
                </section>

                <p>------- OU -------</p>

                <a 
                    className={styles.whatsapp}
                    href="http://wa.me/5581991289676"
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsWhatsapp /> Fale no WhatsApp
                </a>
            </form>
        </div>
    )
}

export default Contact