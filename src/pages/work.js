import Head from 'next/head'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import PageLayout from '../layouts/PageLayout'

export default function Work() {
  return (
    <Box>
      <Head>Work | Aquib Baig</Head>
      <Box className="intro" fontSize="md">
        Work
      </Box>
    </Box>
  )
}

Work.getLayout = function getLayout(page) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}
