import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nicole lindner | about</title>
        <meta name="description" content="About Nicole Lindner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <span className={styles.selected}>About</span>
          <Link href="/about">Conversations</Link>
          <Link href="/about">Exhibitions</Link>
          <Link href="/about">Projects</Link>
        </nav>
      </div>

      <main className={styles.main}>
        <p className={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
    </div>
  )
}
