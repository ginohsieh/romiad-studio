import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

const NavItem = (props) => {
  const { icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      mx="2"
      rounded="md"
      py="3"
      cursor="pointer"
      color="whiteAlpha.700"
      _hover={{
        bg: "blackAlpha.300",
        color: "whiteAlpha.900",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {children}
    </Flex>
  );
};

const Sidebar = ({ navItems=[], ...restProps }) => {
  return (
    <Box
      as="nav"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      px="4"
      overflowX="hidden"
      overflowY="auto"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...restProps}
    >
      <Heading my="4">Romiad Studio</Heading>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {navItems.map((navItem) => (
          <Link to={navItem.to} key={navItem.label}><NavItem>{navItem.label}</NavItem></Link>
        ))}
      </Flex>
    </Box>);
};

export default Sidebar;
