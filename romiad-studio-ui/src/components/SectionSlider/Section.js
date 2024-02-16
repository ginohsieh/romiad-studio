import PropTypes from 'prop-types';
import cls from 'classnames';
import { Box } from '@chakra-ui/react';

export default function Section({ autoHeight, ...restProps }) {
  const className = cls({
    section: true,
    'fp-auto-height': autoHeight,

  })
  return (
    <Box as="section" h="100%" className={className} {...restProps} />
  )
}

Section.propTypes = {
  autoHeight: PropTypes.bool,
}

Section.defaultProps = {
  autoHeight: false,
}
