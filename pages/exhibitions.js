import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Exhibitions.module.css'
import about from '../content/about'

export default function Exhibitions() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nicole lindner | exhibitions</title>
        <meta name="description" content="Nicole Lindner's exhibitions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/about">Conversations</Link>
          <span className={styles.selected}>Exhibitions</span>
          <Link href="/about">Projects</Link>
        </nav>
      </div>

      <main className={styles.main}>
        <p className={styles.about}>{about}</p>
      </main>
    </div>
  )
}
