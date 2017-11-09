import { Component } from 'react';

let id = 0;

export default class HtmlId extends Component {
  componentwillMount() {
    id += 1;
    this.htmlId = id;
  }

  render() {
    return this.props.children(this.htmlId);
  }
}
