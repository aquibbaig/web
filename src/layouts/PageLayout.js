import React, { useState, useEffect } from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../utils/themeswitch'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getBreadcrumbsFromPath, isCurrentPage } from '../utils/utils'

const PageLayout = (props) => {
  const { pathname } = useRouter();
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    setCrumbs(getBreadcrumbsFromPath(pathname));
  }, [pathname])

  return (
    <Box
      maxW={{ base: "100%", md: "80%", lg: "40%"}}
      ml="auto"
      mr="auto"
      mt={{ base: 2, lg: "4vh" }}
      p={4}
      rounded={10}
    >
      {/* Nav */}
      <Box d="flex" justifyContent="space-between" alignItems="center">
        {/* Breadcrumbs */}
        <Breadcrumb fontSize="lg" fontWeight="400">
          {crumbs.map(item => (
            <BreadcrumbItem key={item.route}>
                <Box
                  pointerEvents={!isCurrentPage(item.route, pathname) && 'none'}
                  color={isCurrentPage(item.route, pathname) ? "#939393": "normal"
                }>
                  <Link href={item.route} passHref>
                    {item.name}
                  </Link>
              </Box>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        {/* <Text fontSize="lg" fontWeight="500">Aquib Baig</Text> */}
        <ColorModeSwitcher />
      </Box>
      <Box mt={10}>{props.children}</Box>
    </Box>
  )
}

export default PageLayout;
