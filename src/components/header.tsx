import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import user from "@/data/info.json"

// {
//     "user" : "NicoFerni",
//     "image":"",
//     "about" : "Im a Fullstack Developer and I wanted to pass successfully this challenge. Hope it works correctly.",
//     "interest": ["Futbol", "Economia", "Politica", "Gastronomia"]
// }

export interface User {
    user: string;
    image: string;
    about: string;
    interest: string[]
}

export function Header(){

    return (
        <div className={styles.div}>
            <h2 className={styles.user}>PepitoUser</h2>
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