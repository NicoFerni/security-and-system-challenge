import { useState, FormEvent, } from 'react';
import styles from '@/styles/Form.module.css';
import FormInput from './formInput';
import { inputs, InputType } from '../data/inputs';

interface FormValues {
    name: string;
    mail: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function Form() {


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [values, setValues] = useState<FormValues>({
        name: '',
        mail: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: FormErrors = {};

        inputs.forEach((input: InputType) => {
            const value = values[input.name as keyof FormValues]; 
            if (!value) {
                newErrors[input.name] = `${input.label} no puede estar vacío`;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitted(true);
        }
    };

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.div}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.h1}>Contacto</h1>
                {inputs.map((input: any) => (
                    <div key={input.id}>
                        {input.id === 3 ? (
                            <div className={styles.divtextarea}>
                                <h1 className={styles.label}>{input.label}</h1>
                                <textarea
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    value={values[input.name as keyof FormValues]}
                                    onChange={onChange}
                                    className={styles.textarea}
                                    maxLength={700}

                                />
                                {errors[input.name] && <span className={styles.error}>{errors[input.name]}</span>}
                            </div>
                        ) : (
                            <div>
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values[input.name as keyof FormValues]}
                                    onChange={onChange}
                                    errorMessage={errors[input.errorMessage]}
                                />
                            </div>

                        )}
                    </div>
                ))}
                {isSubmitted && <span className={styles.span}>Informacion enviada con exito!</span>}

                <button className={styles.button}>Enviar</button>
            </form>
        </div>
    );
}
