import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const onClick = () => {
    const introElement = document.getElementById('intro');
    introElement.style.display = 'none';
  };

  return (
    <div>
      <Head>
        <title>nicole lindner</title>
        <meta name="description" content="Nicole Lindner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="intro" className={styles.intro} onClick={onClick}>
          <h1 className={styles.title}>nicole lindner</h1>
        </div>
        <div className={styles.home}>
          <nav className={styles.nav}>
            <Link href="/about">About</Link>
            <Link href="/about">Conversations</Link>
            <Link href="/exhibitions">Exhibitions</Link>
            <Link href="/about">Projects</Link>
          </nav>
        </div>
      </main>
    </div>
  )
}
