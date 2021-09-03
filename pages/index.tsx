import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TypeSelectForm from '../components/TypeSelectForm';
import TodoList from '../components/TodoList';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>recoil + react-query + hooks</title>
        <meta name="description" content="recoil + react-query + hooks sample app" />
      </Head>
      <main className={styles.main}>
        This is sample
        <TypeSelectForm />
        <TodoList />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
