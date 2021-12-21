import React from 'react'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import PostBody from '../../components/PostBody/PostBody';

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
    return (
        <div>
            <PostBody title={title} cover_image={cover_image} date={date}>
                <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
            </PostBody>
        </div>
    )
}


export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('src/posts'))

    const paths = files.map(filename =>({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params: {slug}}){
    const markdownMeta = fs.readFileSync(path.join('src/posts', `${slug}.md`), 'utf-8')
    
    const {data: frontmatter, content} = matter(markdownMeta)
    
    return{
        props: {
            frontmatter,
            slug,
            content
        }
    }
}