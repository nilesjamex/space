import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from "../Layout/Nav";
import Homee from './../Components/Home.js';
import StepContextProvider from '../Contexts/Steps.js'

export default function Home() {
  return
   (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Space App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <main className={styles.main}>
      <StepContextProvider>
       <Homee />
       </StepContextProvider>
      </main>
    </div>
  )
}
