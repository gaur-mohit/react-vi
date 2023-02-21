import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('[Child] constructor');
  }

  static getDrivedStateFromProps(props, state) {
    console.log('[Child] getDrivedStateFromProps');
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('[Child] componentDidMount');
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Child] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log('[Child] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, PrevState, snapshot) {
    console.log('[Child] componentDidUpdate');
  }

  render() {
    console.log('[Child] render()');
    return <div>Child Component {this.props.randomNumber}</div>;
  }
}

export default Child;
