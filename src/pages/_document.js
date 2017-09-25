import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { global } from 'client/theme'; // eslint-disable-line no-unused-vars

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const style = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          {style}
        </Head>
        <body>
          <div id="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
