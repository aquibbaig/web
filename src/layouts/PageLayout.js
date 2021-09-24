import React, { useState, useEffect } from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../utils/themeswitch'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getBreadcrumbsFromPath, isCurrentPage, trim } from '../utils/utils'

const PageLayout = (props) => {
  const { asPath } = useRouter();
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    setCrumbs(getBreadcrumbsFromPath(asPath));
  }, [asPath])

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
                  pointerEvents={!isCurrentPage(item.route, asPath) && 'none'}
                  color={isCurrentPage(item.route, asPath) ? "#939393": "normal"
                }>
                  <Link href={item.route} passHref>
                    {trim(item.name, 20)}
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
