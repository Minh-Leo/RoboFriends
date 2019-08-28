import React, {Component} from "react";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    const {hasError} = this.state;

    if (hasError) {
      return <h1>Oooops, something went wrong....</h1>;
    }
    return this.props.children;
  }
}
