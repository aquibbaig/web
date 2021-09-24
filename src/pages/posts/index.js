import PageLayout from '../../layouts/PageLayout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import Link from 'next/link'

export default function Posts({ posts })  {
  return (
    <PageLayout>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
