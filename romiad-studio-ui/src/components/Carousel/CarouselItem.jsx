
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';

export default function CarouselItem({ autoHeight, ...restProps }) {
  return (
    <Flex as="div" {...restProps} />
  )
}

CarouselItem.propTypes = {
}

CarouselItem.defaultProps = {
}
