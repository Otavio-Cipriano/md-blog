import fs from 'fs'
import path from 'path'
import Head from "next/head";
import matter from 'gray-matter';
import Posts from '../components/Posts/Posts';


export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dev Blog | take a look at the most recent infos</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Posts posts={posts} />
    </>
  )
}


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/posts'))
  const posts = files.map(filename => {

    const slug = filename.replace('.md', '');

    const meta = fs.readFileSync(
      path.join('src/posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(meta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts,
    }
  }
}