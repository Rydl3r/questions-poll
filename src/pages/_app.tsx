import store from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Open_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
