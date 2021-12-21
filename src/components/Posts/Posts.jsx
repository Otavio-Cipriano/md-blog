import PostCard from "../PostCard/PostCard"

import styles from "./Posts.module.css"

export default function Posts({posts}) {
    return (
        <div className={styles.container}>
            {posts.map((post, index) => {
                return (
                    index == 0 ? 
                    <PostCard first key={index} post={post} />:
                    <PostCard key={index} post={post} />
                )
            })}
        </div>
    )
}
