import { Box, Text } from "@chakra-ui/react"
import Link from 'next/link'
import clsx from 'clsx'
import styles from '../styles/Home.module.css'

export default function Socials() {
  return (
    <Box>
      <Link href="mailto:aquibbaig97@gmail.com" passHref>
        <Text fontSize="md" cursor="pointer" className={clsx(
          [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
        )}>
          Send an email
        </Text>
      </Link>
      <Link href="https://github.com/aquibbaig" passHref>
        <Text ml={4} fontSize="md" cursor="pointer" className={clsx(
          [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
        )}>
          Github
        </Text>
      </Link>
      <Link href="https://twitter.com/BaigAquib" passHref>
        <Text ml={4} fontSize="md" cursor="pointer" className={clsx(
          [styles.rlink,styles.animatedunderline,styles.animatedunderline_type1]
        )}>
          Twitter
        </Text>
      </Link>
    </Box>
  )
}