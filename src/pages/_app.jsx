import '../styles/globals.css'

import { Html, Head } from 'next/document'

import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Navbar />
          <Component {...pageProps} />
        </body>
      </Html>
    </>
  )
}

export default MyApp
