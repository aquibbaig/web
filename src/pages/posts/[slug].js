import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import PageLayout from "../../layouts/PageLayout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import { BiCalendarWeek } from "react-icons/bi";
import { RiEyeCloseLine } from "react-icons/ri";
import Socials from "../../components/socials";
import { useRouter } from "next/router";
import { useEffect } from "react";
import usePageViews from "../../hooks/usePageViews";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: dynamic(() => import("../../components/CustomLink")),
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  Code: dynamic(() => import("../../components/Code")),
  Blockquote: dynamic(() => import("../../components/Blockquote")),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = usePageViews(slug);

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);

  const descriptionCol = useColorModeValue(
    "light.secondaryTextColor",
    "dark.secondaryTextColor"
  );
  return (
    <PageLayout>
      <Head>
        <title>{`${frontMatter.title}`} | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/posts">
            <a>
              👈 <span style={{ marginLeft: "4px" }}>Go back</span>
            </a>
          </Link>
        </nav>
      </header>
      <Box className="post-header" my="2rem">
        <Text fontSize="2xl">📓 {frontMatter.title}</Text>
        {frontMatter.description && (
          <Text color={descriptionCol}>{frontMatter.description}</Text>
        )}
        {frontMatter.publishedOn && (
          <Box d="flex" my={2}>
            <Box d="flex" alignItems="center" fontSize="sm">
              <BiCalendarWeek />
              <Text ml={1}>
                {moment(frontMatter.publishedOn).format("D MMM YY")}
              </Text>
            </Box>
            {!error && <Box ml={4} d="flex" alignItems="center" fontSize="sm">
              <RiEyeCloseLine />
              <Text ml={1}>
                {!data?.total ? "...": data?.total}
              </Text>
            </Box>}
          </Box>
        )}
      </Box>
      <Box className="post-body">
        <MDXRemote {...source} components={components} />
      </Box>
      <Box className="socials" mt={8} mb={4}>
        <Box>
          written by <i>Aquib Baig.</i>
        </Box>
        <Socials />
      </Box>
    </PageLayout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
