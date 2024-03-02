'use client'

import { Flex, List, ListItem, IconButton, useBoolean, useBreakpointValue, Spacer } from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { navigation } from '@/config/navigation';
import NavigationDrawer from './NavigationDrawer';
import Logo from '../Logo';

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useBoolean(false);
  const displayDrawer = useBreakpointValue({
    base: true,
    md: false,
  })
  return (
    <Flex
      width="100vw"
      position="fixed"
      zIndex="65535"
      justifyContent="center"
      alignItems="center"
      py="2rem"
    >
      <Flex
        as="nav"
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
      >
        <Link href="/"><Logo /></Link>
        <Spacer w="2rem" />
        <List display="flex" flexDirection="row" gap="1rem">
          {navigation.map((item, index) => (
            <ListItem key={`nav-item-${index}`}><Link href={item.href}>{item.display_name}</Link></ListItem>
          ))}
        </List>
      </Flex>
      <Flex
        display={{ base: 'flex', md: 'none' }}
        width="100%"
        justifyContent="space-between"
        px="2rem"
      >
        <Link href="/"><Logo /></Link>
        <IconButton onClick={setIsDrawerOpen.toggle} variant="ghost" colorScheme="white" icon={<RxHamburgerMenu size="2rem" />} />
        <NavigationDrawer
          isOpen={displayDrawer && isDrawerOpen}
          onClose={setIsDrawerOpen.off}
          navigation={navigation}
        />
      </Flex>
    </Flex>
  );
}
