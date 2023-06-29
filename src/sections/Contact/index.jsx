import React, { useContext, useState } from 'react'
import ContactUs from '../../assets/contact_us.svg'
import { LINKS, DEFAULT_TOAST_CONFIG } from '../../data/constants'
import { toast } from 'react-toastify'
import { useMediaQuery } from 'react-responsive'
import { ScrollContext } from '../../contexts/scroll'
import { BsWhatsapp } from 'react-icons/bs'
import styles from './Contact.module.css'

const Contact = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false)
    const { contactRef } = useContext(ScrollContext)

    const submit = (e) => {
        e.preventDefault()
        setIsSending(true)

        if (name === '' || email === '' || whatsapp === '' || message === '') {
            alert('Preencha todos os campos')
            return
        }

        fetch(`https://formsubmit.co/ajax/${LINKS.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
        }).then(res => res.json()).then((res) => {
            if (res.success === 'false') {
                toast.error(res.message, DEFAULT_TOAST_CONFIG)
            } else {
                toast.success("E-mail enviado", DEFAULT_TOAST_CONFIG)
            }
            console.log(res.message);
        }).finally(() => {
            setIsSending(false)
            setName("")
            setEmail("")
            setWhatsapp("")
            setMessage("")
        })
    }

    return (
        <div className={styles.section} ref={contactRef}>
            {!isTabletOrMobile && <img className={styles.image} src={ContactUs} alt="" />}
            <form className={styles.form} onSubmit={(e) => submit(e)}>
                <h1 className={styles.title}>Nos deixe uma mensagem</h1>
                {isTabletOrMobile && <img className={styles.image} src={ContactUs} alt="" />}

                <input type="hidden" name="_captcha" value="false" />

                <input
                    className={`${styles.input}`}
                    type="text"
                    placeholder="Nome"
                    name='Nome'
                    autoComplete='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />

                <input
                    className={`${styles.input}`}
                    type="email"
                    placeholder="Email"
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <input
                    className={`${styles.input}`}
                    type="tel"
                    placeholder="WhatsApp"
                    name='WhatsApp'
                    autoComplete='tel'
                    onChange={(e) => setWhatsapp(e.target.value)}
                    value={whatsapp}
                    required
                />

                <textarea
                    className={`${styles.input} ${styles.message}`}
                    placeholder="Mensagem"
                    name='Mensagem'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                />

                <section>
                    <input className={styles.submit} type="submit" value={isSending ? "Enviando..." : "Enviar"} disabled={isSending} />
                </section>

                <p>------- OU -------</p>

                <a
                    className={styles.whatsapp}
                    href={LINKS.whatsapp}
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