import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_GANAV)
  return (
    <div className={styles.container}>
      <Head>
        <title>Gal Hagever</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        process env: {process.env.NEXT_PUBLIC_GANAV}
      </div>
    </div>
  )
}
