import PageLayout from '../../layouts/PageLayout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import Link from 'next/link'
import Head from 'next/head'
import _ from 'lodash'
import { Box, List, ListItem } from '@chakra-ui/react'
import { blogPostRandom } from '../../utils/randomEmoji'

export default function Posts({ posts })  {
  posts.map(post => console.log(post.filePath%2))
  return (
    <PageLayout>
      <Box p={2}>
        <Head>
          <title>Posts | Aquib Baig</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <List>
          {posts.map((post) => (
            <ListItem key={post.filePath} d="flex">
              {blogPostRandom(post.filePath)}
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
