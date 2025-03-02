import { ColorModeProvider } from '../ui/color-mode';
import { Provider } from '../ui/provider';

export default function RootProviders({ children }) {
  return (
    <Provider forcedTheme="dark">
      {children}
    </Provider>
  )
}
