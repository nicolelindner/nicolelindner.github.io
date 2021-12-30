import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Exhibitions.module.css';
import exhibitions from '../content/exhibitions';

export default function Exhibitions() {
  const [activeExhibition, setActiveExhibition] = useState(0);

  const clickHandler = (i) => {
    setActiveExhibition(i);
  };

  const renderExhibitionList = () => {
    return exhibitions.map((e, i) => {
      const buttonClassName = activeExhibition === i ? styles.exhibitionListItemSelectedButton : styles.exhibitionListItemButton;
      return (
        <li
          key={`exhibition=${i}`}
          className={styles.exhibitionListItem}
        >
          <button
            onClick={() => clickHandler(i)}
            className={buttonClassName}
          >
            {e.title}
          </button>
        </li>
      )
    });
  };

  const renderExhibitionSlides = () => {
    return exhibitions[activeExhibition]?.slides.map((s, i) => {
      const { src, type } = s;
      if (type === 'image') {
        return (
          <li className={styles.exhibitionSlide}>
            <img
              src={src}
              className={styles.exhibitionSlideImage}
            />
          </li>
        );
      }
      return null;
    });
  }

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
          <div>
            <span className={styles.selected}>Exhibitions</span>
            <ul className={styles.exhibitionList}>{renderExhibitionList()}</ul>
          </div>
          <Link href="/about">Projects</Link>
        </nav>
      </div>

      <main className={styles.main}>
        <ul className={styles.exhibitionSlides}>{renderExhibitionSlides()}</ul>
      </main>
    </div>
  )
}
