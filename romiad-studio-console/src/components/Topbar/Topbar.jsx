import { Box, Button, Flex, Heading } from '@chakra-ui/react';

export default function Topbar() {
  return (
    <Flex
      justifyContent="end"
      alignItems="center"
      h="16"
      px="4"
    >
      <Box>
        <Button variant="ghost">Logout</Button>
      </Box>
    </Flex>
  )
}
