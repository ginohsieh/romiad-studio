import { Providers } from './providers';
import { fonts } from './fonts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-multi-carousel/lib/styles.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[fonts.mPlus1p.variable, fonts.toronoGlitchSansH1.variable].join(' ')}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
