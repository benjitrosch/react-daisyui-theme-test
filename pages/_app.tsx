import type { AppProps } from 'next/app'
import { Theme } from 'react-daisyui'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme dataTheme='dark'>
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
