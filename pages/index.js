import Head from 'next/head';

import Player from '../components/Player';
import Canvas from '../components/Canvas';
import ImageUpload from '../components/ImageUpload';
import Controls from '../components/Controls';
import styles from '../styles/Home.module.css';
import httpClient from '../utils/api';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EPaper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Player />
        <ImageUpload />
        <Canvas />
        <Controls />
      </main>
    </div>
  );
}
