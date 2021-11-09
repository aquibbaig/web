import React, { useState, useEffect } from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    PopoverHeader,
    PopoverArrow,
    PopoverBody
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../utils/themeswitch'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getBreadcrumbsFromPath, isCurrentPage, trim } from '../utils/utils'
import Prism from 'prismjs'
import { RiMusicFill } from 'react-icons/ri'
import CurrentlyPlaying from '../components/CurrentPlaying'
import Equaliser from '../components/Equaliser'

const PageLayout = (props) => {
  const { asPath } = useRouter();
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    setCrumbs(getBreadcrumbsFromPath(asPath));
    Prism.highlightAll();
  }, [asPath])

  return (
    <Box
      maxW={{ base: "100%", md: "80%", lg: "40%" }}
      ml="auto"
      mr="auto"
      mt={{ base: 2, lg: "4vh" }}
      p={4}
      rounded={10}
      mb="4vh"
    >
      {/* Nav */}
      <Box d="flex" justifyContent="space-between" alignItems="center">
        {/* Breadcrumbs */}
        <Breadcrumb fontSize="xl" fontWeight="400">
          {crumbs.map(item => (
            <BreadcrumbItem key={item.route}>
                <Box
                  pointerEvents={!isCurrentPage(item.route, asPath) && 'none'}
                  color={isCurrentPage(item.route, asPath) ? "#939393": "normal"}
                >
                  <Link href={item.route} passHref>
                    {trim(item.name, 20)}
                  </Link>
              </Box>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        {/* <Text fontSize="lg" fontWeight="500">Aquib Baig</Text> */}
        <Box d="flex" alignItems="center">
          <Popover id="my-popover">
            <PopoverTrigger>
              <IconButton
              size="md"
              fontSize="lg"
              marginLeft="2"
              // onClick={toggleColorMode}
              icon={<RiMusicFill />}
              aria-label={`Now Playing`}
              {...props}
              variant="plain"
            />
            </PopoverTrigger>
            <PopoverContent minW="20vw">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Box fontWeight="bold" d="flex" alignItems="center">
                  <Equaliser />
                  <Box ml={1}>Now Playing</Box>
                </Box>
              </PopoverHeader>
              <PopoverBody>
                <CurrentlyPlaying />
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <ColorModeSwitcher />
        </Box>
      </Box>
      <Box mt={10}>{props.children}</Box>
    </Box>
  )
}

export default PageLayout;
