import { Box, Text } from '@chakra-ui/react';
import './style.css';


export default function GlitchText({ children, ...props }) {
  return (
    <Text
      animation="glitch 2s linear infinite"
      {...props}
    >
      <Box
        data-text={children}
        content="attr(data-text)"
        position="absolute"
        top="0"
        w="100%"
        marginInline="auto"
        animation="glitchTop 1s linear infinite"
        clipPath="polygon(0 0, 100% 0, 100% 33%, 0 33%)"
      >
        {children}
      </Box>
      {children}
      <Box
        data-text={children}
        content="attr(data-text)"
        position="absolute"
        top="0"
        w="100%"
        animation="glitchBotomm 1.5s linear infinite"
        clipPath="polygon(0 67%, 100% 67%, 100% 100%, 0 100%)"
      >
        {children}
      </Box>
    </Text>
  );
}
