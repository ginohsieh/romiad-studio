import { Flex, List, ListItem, IconButton } from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { navigation } from '@/config/navigation';

export default function Navigation() {
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
        <IconButton variant="ghost" colorScheme="white" icon={<RxHamburgerMenu size="2rem" />} />
      </Flex>
    </Flex>
  );
}
