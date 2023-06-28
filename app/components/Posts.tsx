import { getStortedPostsDate } from '@/lib/posts'
import React from 'react'
import ListItem from './ListItem';

export default function Posts() {
    const posts = getStortedPostsDate();

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
        <h2 className='text-4xl font-bold text-white'>
            Blog
        </h2>
        <ul className='w-full'>
            {posts.map((post)=>(
                <ListItem post={post} key={post.id}/>
            ))}
        </ul>
    </section>
  )
}
