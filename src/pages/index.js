import React from 'react';

import 'isomorphic-fetch';

export default class MyPage extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return (
      <div />
    );
  }
}
