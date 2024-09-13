import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';

export default function NavigationDrawer({
  navigation = [],
  moveTo,
  onClose = () => { },
  ...restProps
}) {
  return (
    <Drawer
      isFullHeight
      onClose={onClose}
      {...restProps}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="gray.900">
        <DrawerBody>
          <Flex px="1rem" py="6rem" direction="column">
            <Flex
              as="nav"
            >
              <List display="flex" flexDirection="column" gap="1rem">
                {navigation.map((item, index) => (
                  <ListItem key={`nav-item-${index}`}>
                    <a
                      href={item.href}
                      onClick={() => {
                        if (item.href.includes('#')) {
                          const anchor = item.href.slice(item.href.indexOf('#') + 1)
                          console.log(anchor)
                          moveTo(anchor)
                          onClose()
                        }
                      }}
                    >
                      {item.display_name}
                    </a>
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
