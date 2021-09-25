import Head from 'next/head'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import {
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import PageLayout from '../layouts/PageLayout'

export default function Home() {
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
              I keep a keen fascination in 🌌astronomy and love to know about the secrets of the
              universe. Wondering at the nightsky randomly makes me wonder in awe at how
              beautiful the celestial universe actually is, keeping in mind we can only
              see some of it.{' '}
              <i>{`"Somewhere, something incredible is waiting to be known.  -- Carl Sagan"`}</i>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box mt="6vh">
          <Link href="/work" passHref>
            <Text fontSize="lg" cursor="pointer" className={clsx(
              [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
            )}>
              /work
            </Text>
          </Link>
          <Text>
            👨‍💻 Presently, I work as a associate software engineer at <a className={clsx(
              [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
            )} target="blank" href="https://www.redhat.com/en">Redhat</a>
          </Text>
          <Text>🔧 Building virtualbook, important jot-downs to never forget again</Text>
          <Text>👨‍🎓 Mentor at Google Summer of code 2021</Text>
        </Box>
        <Box mt="6vh">
          <Link href="/posts" passHref>
            <Text fontSize="lg" cursor="pointer" className={clsx(
              [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
            )}>
              /posts
            </Text>
          </Link>
          <Text>
            Most of my articles are based upon my experience with using a tool or a framework.
            Here are some of my most recent ideas.
          </Text>
        </Box>
        <Box mt="6vh">
          <Link href="/projects" passHref>
            <Text fontSize="lg" cursor="pointer" className={clsx(
              [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
            )}>
              /projects
            </Text>
          </Link>
          <Text>
            Building tools for humans to use. I feel that I am deeply connected to my projects,
            each of them has helped me achieve a particular strata of learning and fun.
          </Text>
        </Box>
        <Box my={8}>
          <Text fontSize="lg">🤙 {`Let's`} have a chat</Text>
          <Text>
            I am always happy to talk about working together in amazing ideas, opportunity or just
            a casual conversation. If {`you'd`} like to get in touch, shoot me an email below.
          </Text>
          <Box mt={4}>
            <Link href="mailto:aquibbaig97@gmail.com" passHref>
              <Text fontSize="md" cursor="pointer" className={clsx(
                [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
              )}>
                Send an email
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}
