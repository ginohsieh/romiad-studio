import { Flex, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import { navigation } from '@/config/navigation';

export default function Navigation() {
  return (
    <Flex as="nav" justifyContent="center" alignItems="center" py="2rem" position="fixed" width="100vw" zIndex="65535">
      <List display="flex" flexDirection="row" gap="1rem">
        {navigation.map((item, index) => (
          <ListItem key={`nav-item-${index}`}><Link href={item.href}>{item.display_name}</Link></ListItem>
        ))}
      </List>
    </Flex>
  );
}
