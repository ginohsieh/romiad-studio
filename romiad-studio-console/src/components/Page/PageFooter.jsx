import { Box } from '@chakra-ui/react';

function PageFooter(props) {
  return (
    <Box
      px="4x"
      py="4x"
      backgroundColor="gray:10"
      borderWidth="1px 1px 1px 0px"
      borderStyle="solid"
      borderColor="gray:20"
      {...props}
    />
  );
}

export default PageFooter;
