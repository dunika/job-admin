import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { global } from 'client/shared/theme'; // eslint-disable-line no-unused-vars

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const style = sheet.getStyleElement();
    return { ...page, style };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet" />
          {this.props.style}
        </Head>
        <body>
          <div id="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
