import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from "../Layout/Nav";
import Homee from './../Components/Home.js';


export default function Home() {
   {
  return (
    <div className={styles.container}>
     <main className={styles.main}>
      <Homee />
       </main>
    </div>
  )
}
}