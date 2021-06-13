import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/global.scss'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      
      <Component {...pageProps} />

      <Footer />
    </div>
  )
}

export default MyApp