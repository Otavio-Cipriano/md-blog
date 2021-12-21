import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href="/"><h2>Dev blog</h2></Link>
            </div>
        </div>
    )
}
