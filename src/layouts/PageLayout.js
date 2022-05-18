import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
  Tooltip,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../utils/themeswitch";
import { useRouter } from "next/router";
import Link from "next/link";
import { getBreadcrumbsFromPath, isCurrentPage, trim } from "../utils/utils";
import Prism from "prismjs";
import { RiMusicFill } from "react-icons/ri";
import CurrentlyPlaying from "../components/CurrentPlaying";
import useScrollPosition from "../utils/useScroll";
import { BsArrowUp } from "react-icons/bs";
import { motion } from "framer-motion";

const variants = {
  rotate: { rotate: [0, -360], transition: { duration: 0.5 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  stop: { y: [0, -10, 0] },
};

const PageLayout = (props) => {
  const { asPath } = useRouter();
  const [crumbs, setCrumbs] = useState([]);

  const [clicked, setClicked] = useState(false);

  const scrollPos = useScrollPosition();

  useEffect(() => {
    setCrumbs(getBreadcrumbsFromPath(asPath));
    Prism.highlightAll();
  }, [asPath]);

  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );

  return (
    <Box mt={{ base: 2, lg: "4vh" }} p={4} rounded={10} mb="4vh">
      {/* Nav */}
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        mx={{ lg: "18vw" }}
        position="sticky"
        top="0px"
        backdropFilter="blur(40px)"
      >
        {/* Breadcrumbs */}
        {scrollPos < 60 || crumbs.length < 3 ? (
          <Breadcrumb fontSize="xl" fontWeight="400" py={4}>
            {crumbs.map((item) => {
              const isCp = isCurrentPage(item.route, asPath);
              return (
                <BreadcrumbItem key={item.route}>
                  <Box
                    pointerEvents={!isCp && "none"}
                    color={isCp ? "#939393" : "normal"}
                    fontWeight={isCp ? "400" : "500"}
                  >
                    <Link href={item.route} passHref>
                      {trim(item.name, 48)}
                    </Link>
                  </Box>
                </BreadcrumbItem>
              );
            })}
          </Breadcrumb>
        ) : (
          <Box
            d="flex"
            alignItems="center"
            fontWeight={500}
            py={4}
            ml={{ lg: "4vw" }}
            fontSize="2xl"
          >
            <Box>
              <Tooltip mt={4} label="Back to Top">
                <Box
                  onClick={() => {
                    setClicked(true);
                    setTimeout(() => {
                      resetWindowScrollPosition();
                      setClicked(false);
                    }, 500);
                  }}
                  cursor="pointer"
                >
                  <motion.div
                    variants={variants}
                    animate={clicked ? "rotate" : "stop"}
                  >
                    <BsArrowUp />
                  </motion.div>
                </Box>
              </Tooltip>
            </Box>
            <Box ml={10}>{crumbs[crumbs.length - 1].name}</Box>
          </Box>
        )}
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
              <PopoverBody p={0}>
                <CurrentlyPlaying />
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <ColorModeSwitcher />
        </Box>
      </Box>
      <Box
        mt={4}
        maxW={{ base: "100%", md: "80%", lg: "45%" }}
        ml="auto"
        mr="auto"
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default PageLayout;
