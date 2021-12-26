import styles from './PostCard.module.css'

import Link from 'next/link'

import TrimText from '../../hooks/TrimText'

export default function PostCard({ post, first }) {
    const slug = post.slug
    return (
        <Link href={'/blog/' + slug} passHref>
            <div className={`${styles.container} ${first ? styles.first : ''}`}>
                <div className={styles.imageContainer}>
                    <img src={post.frontmatter.cover_image} alt="post image" />
                </div>
                <div className={styles.textContainer}>
                    <span>Posted at {post.frontmatter.date}</span>
                    <h3>{post.frontmatter.title.substr(0, 100)}</h3>
                    <p>{post.frontmatter.desc.substr(0, 250)}</p>
                    <div><a>Read More {'>>'}</a></div>
                </div>
            </div>
        </Link>
    )
}
