import Head from 'next/head'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import PageLayout from '../layouts/PageLayout'

export default function Home() {
  console.log(process.cwd())
  return (
    <Box>
      <Head>Home | Aquib Baig</Head>
      <Box className="intro" fontSize="md">
        <Text>
          Hey, {`I'm`} Aquib! I design {'&'} build digital products.
        </Text>
        <Text>
          I am 23 y/o and I am  highly inquisitive about technology and the way it affects our
          daily lives. {`I've`} had my first computer back in 2006 and I have been amazed by the
          incredible amount of things you can do with it.
        </Text>
        <Accordion allowToggle my={4}>
          <AccordionItem id="accordion">
            <AccordionButton>🐱 Read more</AccordionButton>
            <AccordionPanel>
              Back in the days, I used computers for playing OG Flash games. Enter 2017,
              never thought that I could program my computer to build such things myself!
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Link href="/work" passHref>
          <Text cursor="pointer" className={clsx(
            [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
          )}>
            /work
          </Text>
        </Link>
        <Link href="/posts" passHref>
          <Text cursor="pointer" className={clsx(
            [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
          )}>
            /posts
          </Text>
        </Link>
      </Box>
    </Box>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}
