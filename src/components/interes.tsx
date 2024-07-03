import styles from '@/styles/Interest.module.css'

export function Interest() {

    return (
        <div className={styles.div}>
            <h1 className={styles.title}>
                Intereses
            </h1>
            <ul>
                <li className={styles.ul}>Futbol</li>
                <li className={styles.ul}>Economia</li>
                <li className={styles.ul}>Politica</li>
                <li className={styles.ul}>Gastronomia</li>
            </ul>

        </div>
    )
}