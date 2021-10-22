import Head from 'next/head'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import {
    Box,
    List,
    ListItem,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import PageLayout from '../layouts/PageLayout'

export default function Work() {
    return (
        <Box>
            <Head>
                <title>Work | Aquib Baig</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box className="pinned" d="flex" mt="4vh" pl={1}>
                📌
                <Text ml={2}>Associate Software Engineer, Red Hat</Text>
            </Box>
            <Box className="pinned" d="flex" mb="4vh" pl={1}>
                🎒
                <Text ml={2}>Building programmers-backpack, your tools profile in the programming world</Text>
            </Box>
            <Box className="work-2021">
                <Text mb={2}>2021</Text>
                <Box pl={2}>
                    <List>
                        <ListItem d="flex">
                            👨‍🎓
                            <Text ml={2}>Mentor at Google Summer of code 2021</Text>
                        </ListItem>
                        <ListItem d="flex">
                            🔧
                            <Text ml={2}>
                                Built{' '}
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
                                , effective summaries, reading and note making.
                            </Text>
                        </ListItem>
                        <ListItem d="flex">
                            🏗️
                            <Text ml={2}>
                                Integrated user authentication mechanism in{' '}
                                <a
                                    className={clsx([
                                        styles.rlink,
                                        styles.animatedunderline,
                                        styles.animatedunderline_type1,
                                    ])}
                                    target="blank"
                                    href="https://distributed-system-analysis.github.io/pbench/"
                                >
                                    pbench-dashboard
                                </a>
                            </Text>
                        </ListItem>
                        <ListItem d="flex">
                            ⛏️
                            <Text ml={2}>
                                Built a dashboard for visualising data curated
                                by the bench-routes server
                            </Text>
                        </ListItem>
                        <ListItem d="flex">
                            🔬 <Text ml={2}>Experimenting around with golang</Text>
                        </ListItem>
                        <ListItem d="flex">
                            👾
                            <Text ml={2}>
                                Some competitive programming questions on
                                codeforces
                            </Text>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Accordion allowToggle mt="4vh" className="work-2021">
                <AccordionItem id="accordion">
                    <AccordionButton>🐱 2020</AccordionButton>
                    <AccordionPanel pl={2}>
                        <List>
                            <ListItem d="flex">
                                ⛏️
                                <Text ml={2}>
                                    Built{' '}
                                    <a
                                        className={clsx([
                                            styles.rlink,
                                            styles.animatedunderline,
                                            styles.animatedunderline_type1,
                                        ])}
                                        target="blank"
                                        href="https://www.gophertuts.surge.sh/"
                                    >
                                        gophertuts
                                    </a>
                                    , a collection of rarely visited topics in
                                    go programming language
                                </Text>
                            </ListItem>
                            <ListItem d="flex">
                                📱
                                <Text ml={2}>
                                    Built{' '}
                                    <a
                                        className={clsx([
                                            styles.rlink,
                                            styles.animatedunderline,
                                            styles.animatedunderline_type1,
                                        ])}
                                        target="blank"
                                        href="https://github.com/zairza-cetb/literature"
                                    >
                                        literature
                                    </a>
                                    , a fun card game for native devices usually
                                    played among 4-6 people
                                </Text>
                            </ListItem>
                            <ListItem d="flex"></ListItem>
                            <ListItem d="flex"></ListItem>
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowToggle mt="2vh" className="work-2021">
                <AccordionItem id="accordion">
                    <AccordionButton>🐱 2019</AccordionButton>
                    <AccordionPanel pl={2}>
                        <List>
                            <ListItem d="flex">
                                🏆{' '}
                                <Text>
                                    Google summer of code intern at FOSSi,
                                    contributed to{' '}
                                    <a
                                        className={clsx([
                                            styles.rlink,
                                            styles.animatedunderline,
                                            styles.animatedunderline_type1,
                                        ])}
                                        target="blank"
                                        href="https://www.librecores.org/"
                                    >
                                        librecores
                                    </a>
                                </Text>
                            </ListItem>
                            <ListItem d="flex">
                                🎯{' '}
                                <Text>
                                    Added custom tooling and features for{' '}
                                    <a
                                        className={clsx([
                                            styles.rlink,
                                            styles.animatedunderline,
                                            styles.animatedunderline_type1,
                                        ])}
                                        target="blank"
                                        href="https://mevn.madlabs.xyz/"
                                    >
                                        mevnCLI
                                    </a>
                                </Text>
                            </ListItem>
                            <ListItem d="flex"></ListItem>
                            <ListItem d="flex"></ListItem>
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

Work.getLayout = function getLayout(page) {
    return <PageLayout>{page}</PageLayout>
}
