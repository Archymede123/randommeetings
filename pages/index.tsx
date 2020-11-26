import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Menu from 'components/Menu';
import { content } from 'settings/content';
import styles from '../styles/Home.module.css';

const GlobalStyle = createGlobalStyle`
  body: {
    overflow: hidden;
  }
`;

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 120px 1fr;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .header {
    grid-row: 1;
    grid-column: 1 / span 3;
    background: red;
  }

  .content {
    grid-row: 2;
    grid-column: 1 / span 3;
    background: blue;
  }

  .menus {
    grid-row: 3;
  }
`;

const Home: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Random Meetings</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeLayout>
      <div className="header">RandomMeeting</div>
      <div className="content">
        <div>Portraits</div>
        <div>Voyage à vélo</div>
        <div>Ailleurs</div>
      </div>
      {Object.keys(content).map((category, i) => (
        <Menu title={category} key={i} content={content[category as keyof typeof content]} />
      ))}
    </HomeLayout>
  </div>
);

export default Home;
