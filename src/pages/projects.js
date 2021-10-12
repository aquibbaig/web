import Head from 'next/head'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import {
    Box,
    UnorderedList,
    ListItem,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import PageLayout from '../layouts/PageLayout'

export default function Projects() {
    return (
        <Box>
            <Head>
                <title>Projects | Aquib Baig</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box className="pinned" d="flex" my="4vh" pl={1}>
                📌
                <Text ml={2}>Work In Progress, programmers-backpack</Text>
            </Box>
            <Box mt="4vh">
                <Text>🐱 Bench routes</Text>
                <Box pl={2}>
                    <Text>Bench-routes is a monitoring tool that monitors from system/kernel level
                        information to the application level logs and performance of routes in unix-based
                        systems.
                    </Text>
                    <Accordion allowToggle>
                        <AccordionItem id="accordion">
                            <AccordionButton>▼ More</AccordionButton>
                            <AccordionPanel pl={2}>
                                Modern web applications can have routes ranging from a few to millions in numbers.
                                This makes it tough to discover then condition and state of the such application at any given point.
                                Bench-routes monitors the routes of a web application and helps you know about the current state of
                                each route, along with various related performance metrics.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
            <Box mt="4vh">
                <Text>🐱 Virtualbook</Text>
                <Box pl={2}>
                    <Text>Create your personal space to curate learning material, manage notes and discover amazing articles.
                    </Text>
                    <Accordion allowToggle>
                        <AccordionItem id="accordion">
                            <AccordionButton>▼ More</AccordionButton>
                            <AccordionPanel pl={2}>
                                It provides an effective note taking experience with support of a rich editor and allows you to manage your articles in one place. You can also keep track of articles others publish at your own personal space and get notified when their authors update it.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
            <Box mt="4vh">
                <Text>🐱 Literature</Text>
                <Box pl={2}>
                    <Text>Literature is a card game for 4 to 12 players, most commonly played with 6 or 8 players in two teams.
                    </Text>
                    <Accordion allowToggle>
                        <AccordionItem id="accordion">
                            <AccordionButton>▼ More</AccordionButton>
                            <AccordionPanel pl={2}>
                                    <a
                                        className={clsx([
                                            styles.rlink,
                                            styles.animatedunderline,
                                            styles.animatedunderline_type1,
                                        ])}
                                        target="blank"
                                        href="https://en.wikipedia.org/wiki/Literature_(card_game)"
                                    >
                                        Rules
                                    </a>
                                <UnorderedList>
                                    <ListItem>Connect to up to 6 people in a single game</ListItem>
                                    <ListItem>Add friends from social media</ListItem>
                                    <ListItem>Play the ever fun game of literature</ListItem>
                                    <ListItem>Get coins and get fancy items from the store.</ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )
}

Projects.getLayout = function getLayout(page) {
    return <PageLayout>{page}</PageLayout>
}
