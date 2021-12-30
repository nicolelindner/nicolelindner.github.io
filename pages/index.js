import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handler = () => {
    const introElement = document.getElementById('intro');
    introElement.style.display = 'none';
  };

  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <div>
      <Head>
        <title>nicole lindner</title>
        <meta name="description" content="Nicole Lindner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="intro" className={styles.intro} onClick={handler}>
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
