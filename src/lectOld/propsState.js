/*
* 강좌2-3편 = Props
* -----
* 일단 간단한 실습은 코드팬(codePen.io) 에서 O.k
* 환경=Babel, React, ReactDOM
*
* 제일 첫번째 실습화일 = 코드팬 확인OK
**/

import React from 'react';
import ReactDOM from 'react-dom';

class CodeLab extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello..{this.props.name}</h1>
        <h2>{this.props.number}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
};

// class App extends React.Component {
//   render() {
//     return (
//       <CodeLabProps name={this.props.name}>
//         {this.props.children}
//       </CodeLabProps>
//     );
//   }
// };

CodeLabProps PropTypes = {
  name: React.PropTypes.string
  number: React.PropTypes.isRequred
};

CodeLabProps.defaultProps = {
  name:'Unknown'
}

class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.value}
        {this.props.secondValue}
        {this.props.thirdValue}
      </div>
    );
  }
};

App.prototype = {
  value: React.PropTypes.string,
  secondValue: React.PropTypes.number,
  thirdValue: React.PropTypes.any.isRequred
};

// refer to: https://facebook.githun.id/react/docs/reusable-components.html

ReactDOM.render(<App name='velopert'>I am your children</App>, document.getElementById('root'))
