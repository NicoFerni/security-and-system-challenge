import React, { useState } from 'react'
import styles from '@/styles/Form.module.css'

interface FormData {
    name: string;
    email: string;
    message: string
}


export function Form() {

    const [sendText, setSendText] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData: FormData = {
            name: e.currentTarget.value,
            email: e.currentTarget.value,
            message: e.currentTarget.value,
        }
        setSendText('Mensaje enviado!')
    }

    console.log(onSubmit)
    return (
        <div className={styles.div}>
            <h1 className={styles.text}>Contacto</h1>
            <form onSubmit={onSubmit}>
                <label className={styles.label}>
                    Nombre
                </label>
                <input
                    className={styles.input}
                    placeholder='Ingrese su nombre'
                    type='name'
                    id='name'
                    name='name'
                />

                <label className={styles.label}>
                    Email
                </label>
                <input
                    className={styles.input}
                    placeholder='Ingrese un mail valido'
                    
                    id="email"
                    name="email"
                />

                <label className={styles.label}>
                    Mensaje
                </label>
                <textarea
                    className={styles.input}
                    placeholder='Escriba su mensaje'
                    id="message"
                    name="message"
                >

                </textarea>

                <button className={styles.button} type="submit">
                    Enviar
                </button>

                {sendText && <p className={styles.sendText}>{sendText}</p>}
            </form>
        </div>

    )
}