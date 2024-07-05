import styles from '@/styles/About.module.css'
import data from '@/data/info.json'

export function About() {

    return (
        <div className={styles.div}>
            <h1 className={styles.title}>
                Sobre Mi
            </h1>
            <p className={styles.paragraph}>
                {data.about}
            </p>
        </div>

    )
}