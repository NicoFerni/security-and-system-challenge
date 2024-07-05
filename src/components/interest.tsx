import styles from '@/styles/Interest.module.css'
import data from '@/data/info.json'

export function Interest() {

    return (
        <div className={styles.div}>
            <h1 className={styles.title}>
                Intereses
            </h1>
            <ul className={styles.ul}>
                {data.interest.map((interest) => (
                    <li key={interest} className={styles.li}>
                        {interest}
                    </li>
                ))}
            </ul>
        </div>
    )
}
