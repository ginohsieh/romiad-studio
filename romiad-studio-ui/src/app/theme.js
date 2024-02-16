import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    'website-title': {
      fontFamily: 'var(--font-torono-glitch-sans-h1)',
      fontSize: {
        base: "2rem",
        md: "2.5rem"
      },
    },
  },
  fonts: {
    body: 'var(--font-mplus1p)',
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      }
    }
  }
})

export default theme;
