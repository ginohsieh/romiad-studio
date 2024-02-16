
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

export default function CarouselItem({ autoHeight, ...restProps }) {
  return (
    <Box as="div" {...restProps} />
  )
}

CarouselItem.propTypes = {
}

CarouselItem.defaultProps = {
}
