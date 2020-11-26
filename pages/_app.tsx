import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
