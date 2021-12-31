import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import projects from '../content/projects';

export default function Projects() {
  const renderProjectList = () => {
    return projects.map((p, i) => {
      const { title, url } = p;
      return (
        <li
          key={`project-${i}`}
          className={styles.projectListItem}
        >
          <a href={url}>{title}</a>
        </li>
      )
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>nicole lindner | projects</title>
        <meta name="description" content="Nicole Lindner's projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/conversations">Conversations</Link>
          <Link href="/exhibitions">Exhibitions</Link>
          <span className={styles.selected}>Projects</span>
        </nav>
      </div>

      <main className={styles.main}>
        <ul className={styles.projectList}>{renderProjectList()}</ul>
      </main>
    </div>
  )
}
