'use client'

import { Flex, List, ListItem, IconButton, useBoolean, useBreakpointValue } from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { navigation } from '@/config/navigation';
import NavigationDrawer from './NavigationDrawer';

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
      >
        <List display="flex" flexDirection="row" gap="1rem">
          {navigation.map((item, index) => (
            <ListItem key={`nav-item-${index}`}><Link href={item.href}>{item.display_name}</Link></ListItem>
          ))}
        </List>
      </Flex>
      <Flex
        display={{ base: 'flex', md: 'none' }}
        width="100%"
        justifyContent="end"
        px="2rem"
      >
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
