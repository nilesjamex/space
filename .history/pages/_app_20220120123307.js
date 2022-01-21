import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StepContextProvider from '../Contexts/Steps.js'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return ( 
    
    <StepContextProvider>
     <Head>
        <title>Space</title>
        <meta name="description" content="Space App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
  <Component {...pageProps} />
  </StepContextProvider>
  )
}

export default MyApp
