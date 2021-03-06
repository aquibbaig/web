import Head from "next/head";
import styles from "../styles/Home.module.css";
import clsx from "clsx";
import Link from "next/link";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import PageLayout from "../layouts/PageLayout";
import Socials from "../components/socials";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box className="intro" fontSize="md">
        <Text>
          Hey, {`I'm`} Aquib! I design {"&"} build digital products.
        </Text>
        <Text>
          I am 23 y/o and I am highly inquisitive about technology and the way
          it affects our daily lives. {`I've`} had my first computer back in
          2006 and I have been amazed by the incredible amount of things you can
          do with it.
        </Text>
        <Accordion allowToggle my={4}>
          <AccordionItem id="accordion">
            <AccordionButton>🐱 Read more</AccordionButton>
            <AccordionPanel>
              I keep a keen fascination in 🌌{" "}
              <span style={{ paddingLeft: "5px" }}>astronomy</span> and love to
              know about the secrets of the universe. Wondering at the nightsky
              randomly makes me wonder in awe at how beautiful the celestial
              universe actually is, keeping in mind we can only see some of it.{" "}
              <i>{`"Somewhere, something incredible is waiting to be known.  -- Carl Sagan"`}</i>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box mt="6vh">
          <Link href="/work" passHref>
            <Text
              fontSize="xl"
              cursor="pointer"
              className={clsx([
                styles.rlink,
                styles.animatedunderline,
                styles.animatedunderline_type1,
              ])}
            >
              Work
            </Text>
          </Link>
          <Box d="flex">
            👨‍💻{" "}
            <Text ml={2}>
              Presently, Member of Technical Team at{" "}
              <a
                className={clsx([
                  styles.rlink,
                  styles.animatedunderline,
                  styles.animatedunderline_type1,
                ])}
                target="blank"
                href="https://www.toplyne.io/"
              >
                Toplyne.io
              </a>
            </Text>
          </Box>
          <Box d="flex">
            🎁{" "}
            <Text ml={2}>
              Associate Software Engineer at{" "}
              <a
                className={clsx([
                  styles.rlink,
                  styles.animatedunderline,
                  styles.animatedunderline_type1,
                ])}
                target="blank"
                href="https://www.redhat.com/en"
              >
                Red Hat
              </a>
            </Text>
          </Box>
          <Box d="flex">
            🔧{" "}
            <Text ml={2}>
              Built{" "}
              <a
                className={clsx([
                  styles.rlink,
                  styles.animatedunderline,
                  styles.animatedunderline_type1,
                ])}
                target="blank"
                href="https://virtualbook.vercel.app"
              >
                virtualbook
              </a>
              , effective summaries, reading and note taking
            </Text>
          </Box>
          <Box d="flex">
            👨‍🎓 <Text ml={2}>Mentor at Google Summer of code 2021</Text>
          </Box>
        </Box>
        <Box mt="6vh">
          <Link href="/posts" passHref>
            <Text
              fontSize="xl"
              cursor="pointer"
              className={clsx([
                styles.rlink,
                styles.animatedunderline,
                styles.animatedunderline_type1,
              ])}
            >
              Posts
            </Text>
          </Link>
          <Text>
            Most of my articles are based upon my experience with using a tool
            or a framework. Here are some of my most recent ideas.
          </Text>
        </Box>
        <Box mt="6vh">
          <Link href="/projects" passHref>
            <Text
              fontSize="xl"
              cursor="pointer"
              className={clsx([
                styles.rlink,
                styles.animatedunderline,
                styles.animatedunderline_type1,
              ])}
            >
              Projects
            </Text>
          </Link>
          <Text>
            Building tools for humans to use. I feel that I am deeply connected
            to my projects, each of them has helped me achieve a particular
            strata of learning and fun.
          </Text>
        </Box>
        <Box my={8}>
          <Text fontSize="lg" mr={2}>
            🤙 {`Let's`} have a chat
          </Text>
          <Text>
            I am always happy to talk about working together in amazing ideas,
            opportunity or just a casual conversation. If {`you'd`} like to get
            in touch, shoot me an email below.
          </Text>
          <Box mt={4}>
            <Socials />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Home.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
