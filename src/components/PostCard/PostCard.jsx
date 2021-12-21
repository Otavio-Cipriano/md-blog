import styles from './PostCard.module.css'

import Link from 'next/link'

export default function PostCard({ post, first }) {
    const slug = post.slug
    return (
        <Link href={'/blog/' + slug}>
            <div className={`${styles.container} ${first ? styles.first : ''}`}>
                <div className={styles.imageContainer}>
                    <img src={post.frontmatter.cover_image} alt="post image" />
                </div>
                <div className={styles.textContainer}>
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.frontmatter.desc}</p>
                </div>
                <div className='btn'>
                    More Details {'>>'}
                </div>
            </div>
        </Link>
    )
}
