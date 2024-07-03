import styles from '@/styles/Form.module.css'

export function Form() {



    return (
        <form>
            <div>
                <h1>Contacto</h1>
            </div>
            <div>
                <label>Nombre</label>
                <input type="text" name="name" id="name" required />

                <label>Email</label>
                <input type="text" name="name" id="name" required />

                <label>Mensaje</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>

    )
}