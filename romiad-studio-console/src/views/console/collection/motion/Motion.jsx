import { Flex } from '@chakra-ui/react';
import { PageHeader } from '../../../../components/Page';
import Interview from './Interview';

export default function Motion() {
  return (
    <Flex direction="column">
      <PageHeader>Motion</PageHeader>
      <Interview />
    </Flex>
  )
}
