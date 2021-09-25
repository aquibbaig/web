import PageLayout from '../../layouts/PageLayout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import Link from 'next/link'
import _ from 'lodash'
import { Box, List, ListItem } from '@chakra-ui/react'

export default function Posts({ posts })  {
  return (
    <PageLayout>
      <Box p={2}>
        <List>
          {posts.map((post) => (
            <ListItem key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a>{post.data.title}</a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
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

  const sortedPosts = _.reverse(_.sortBy(posts, (post) => post.data.publishedOn))

  return { props: { posts: sortedPosts } }
}
