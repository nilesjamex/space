import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StepContextProvider from '../Contexts/Steps.js'


function MyApp({ Component, pageProps }) {
  return ( 
    <StepContextProvider>
  <Component {...pageProps} />
  </StepContextProvider>
  )
}

export default MyApp
