import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Conversations.module.css';
import conversations from '../content/conversations';

export default function Conversations() {
  const [activeConversation, setActiveConversation] = useState(0);

  const clickHandler = (i) => {
    setActiveConversation(i);
  };

  const renderConversationList = () => {
    return conversations.map((c, i) => {
      const buttonClassName = activeConversation === i ? styles.conversationListItemSelectedButton : styles.conversationListItemButton;
      return (
        <li
          key={`conversation-${i}`}
          className={styles.conversationListItem}
        >
          <button
            onClick={() => clickHandler(i)}
            className={buttonClassName}
          >
            {c.title}
          </button>
        </li>
      )
    });
  };

  const renderActiveConversation = () => {
    const conversation = conversations[activeConversation];
    const { title, subtitle, paragraphs } = conversation;
    const renderParagraphs = () => {
      return paragraphs.map((para, i) => {
        return (
          <p
            key={`conversation-${activeConversation}-paragraph-${i}`}
            className={styles.conversationParagraph}
          >
            {para}
          </p>
        );
      });
    }
    return (
      <article className={styles.conversation}>
        <h2 className={styles.conversationTitle}>{title}</h2>
        <h3 className={styles.conversationSubtitle}>{subtitle}</h3>
        {renderParagraphs()}
      </article>
    )
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>nicole lindner | conversations</title>
        <meta name="description" content="Nicole Lindner's conversations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <div>
            <span className={styles.selected}>Conversation</span>
            <ul className={styles.conversationList}>{renderConversationList()}</ul>
          </div>
          <Link href="/exhibitions">Exhibitions</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>

      <main className={styles.main}>{renderActiveConversation()}</main>
    </div>
  )
}
