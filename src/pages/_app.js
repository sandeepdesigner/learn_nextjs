import LayoutContainer from '@/layout/LayoutContainer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <LayoutContainer  >
      <Component {...pageProps} />
    </LayoutContainer>

  )
}
