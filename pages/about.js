import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import about from '../content/about';

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
          <Link href="/conversations">Conversations</Link>
          <Link href="/exhibitions">Exhibitions</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>

      <main className={styles.main}>
        <p className={styles.about}>{about}</p>
      </main>
    </div>
  )
}
