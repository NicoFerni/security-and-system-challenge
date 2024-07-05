import { useState } from 'react'
import styles from '@/styles/Form.module.css'
import FormInput from './formInput'


export default function Form() {

    const [values, setValues] = useState<any>({
        name: '',
        mail: '',
        message: ''
    })

    const inputs = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Ingrese su nombre',
            label: 'Nombre ',
            errorMessage: 'El nombre no puede estar vacio y no debe contener caracteres especiales',
            pattern: `^[A-Za-z]{1,20}$`,
            required: true
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Ingrese su email',
            label: 'Email ',
            errorMessage: 'Debes ingresar una direccion de correo valida',
            required: true
        },
        {
            id: 3,
            name: 'message',
            type: 'text',
            placeholder: 'Deje su mensaje',
            label: 'Mensaje ',
            errorMessage: 'Campo obligatorio',
            required: true
        }
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div className={styles.div}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.h1}>Contacto</h1>
                { 
                inputs.map((input: any) => (   
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))
                }
                <button className={styles.button}>Enviar</button>
            </form>
        </div>
    )
}