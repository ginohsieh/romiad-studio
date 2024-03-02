import PropTypes from 'prop-types';
import { Box, Image } from '@chakra-ui/react';

export default function Logo({ color, ...restProps }) {
  const colorMap = {
    black: './imgs/black.png',
    white: './imgs/white.png',
    blue: './imgs/blue.png',
  }
  const src = colorMap[color] || colorMap.white;

  return (
    <Box w="4rem" {...restProps}><Image alt="logo" src={src} /></Box>
  )
}

Logo.defaultProps = {
  color: 'white',
}

Logo.propTypes = {
  color: PropTypes.oneOf(['black', 'white', 'blue'])
}
