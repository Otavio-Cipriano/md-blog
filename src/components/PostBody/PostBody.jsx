import style from './PostBody.module.css'
import Link from 'next/link'

export default function PostBody({ children, title, date, cover_image }) {
    return (
        <div className={style.container}>
            <Link href="/">
                <div className="btn">
                    {'<<'} Go Back
                </div>
            </Link>
            <h1>{title}</h1>
            <div className={style.imageContainer}>
                <img src={cover_image} alt="" />
            </div>
            {children}
        </div>
    )
}
