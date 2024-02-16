import localFont from 'next/font/local'
import { M_PLUS_1p } from 'next/font/google'

const mPlus1p = M_PLUS_1p({
  subsets: ['latin'],
  variable: '--font-mplus1p',
  weight: ['100', '300', '400', '500', '700', '900'],
})

const toronoGlitchSansH1 = localFont({
  src: './torono-glitch-sans-h1.otf',
  display: 'swap',
  variable: '--font-torono-glitch-sans-h1',
})

export const fonts = {
  mPlus1p,
  toronoGlitchSansH1,
}
