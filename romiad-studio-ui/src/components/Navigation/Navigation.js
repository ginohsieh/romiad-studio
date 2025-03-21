'use client'

import { Flex, List, ListItem, IconButton, useBoolean, useBreakpointValue, Spacer, useConst } from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { navigation } from '@/config/navigation';
import { useCallback } from 'react';
import NavigationDrawer from './NavigationDrawer';
import Logo from '../Logo';

export default function Navigation({ moveTo = () => {}, ...restProps }) {
  const [isDrawerOpen, setIsDrawerOpen] = useBoolean(false);
  const displayDrawer = useBreakpointValue({
    base: true,
    md: false,
  })

  const moveToMain = useCallback(() => {
    moveTo('main')
  }, [moveTo])
  return (
    <Flex
      top="0"
      width="100vw"
      position="fixed"
      zIndex="65535"
      justifyContent="center"
      alignItems="center"
      py="2rem"
      {...restProps}
    >
      <Flex
        as="nav"
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
      >
        <Link href="/#main" onClick={moveToMain}><Logo /></Link>
        <Spacer w="2rem" />
        <List display="flex" flexDirection="row" gap="1rem">
          {navigation.map((item, index) => (
            <ListItem key={`nav-item-${index}`}>
              <Link
                href={item.href}
                onClick={() => {
                  if (item.href.includes('#')) {
                    const anchor = item.href.slice(item.href.indexOf('#') + 1)
                    moveTo(anchor)
                  }
                }}
              >
                {item.display_name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Flex
        display={{ base: 'flex', md: 'none' }}
        width="100%"
        justifyContent="space-between"
        px="2rem"
      >
        <Link href="/#main" onClick={moveToMain}><Logo /></Link>
        <IconButton onClick={setIsDrawerOpen.toggle} variant="ghost" colorScheme="white" icon={<RxHamburgerMenu size="2rem" />} />
        <NavigationDrawer
          moveTo={moveTo}
          isOpen={displayDrawer && isDrawerOpen}
          onClose={setIsDrawerOpen.off}
          navigation={navigation}
        />
      </Flex>
    </Flex>
  );
}
