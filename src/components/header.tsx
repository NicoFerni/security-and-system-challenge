import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import data from "@/data/info.json"


export function Header(){

    return (
        <div className={styles.div}>
            <h2 className={styles.user}>{data.user}</h2>
            <div>
            <Image
            className={styles.image} 
            src='/profile-picture.jpg'
            width={100}
            height={100}
            alt='Profile Picture'
            />
            </div>
        </div>
    )
}