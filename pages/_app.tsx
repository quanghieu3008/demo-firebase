import 'antd/dist/antd.less';
import React from 'react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
