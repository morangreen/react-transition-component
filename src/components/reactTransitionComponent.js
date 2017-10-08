import React from 'react';

class ReactTransitionComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      isVisible: false
    };
  }

  render() {
    const isVisible = this.state.isVisible;

    return (<div className='moran' >
      <div className={isVisible ? 'on' : 'off'} onTransitionEnd={this.onTransitionEnd}>moran</div>
      <button onClick={this.onClick}>toggle visibility</button>
    </div>);
  }

  onClick() {
    this.setState({isVisible: !this.state.isVisible});
  }

  onTransitionEnd(e) {
    console.log('transitionEnd', e.target.classList);
  }
}

export default ReactTransitionComponent;