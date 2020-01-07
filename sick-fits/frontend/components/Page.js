import React, { Component } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: 100px;
`;
// backticks are a tag template literal - works similarly to a function button()

class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <MyButton>Click Me</MyButton>
        {this.props.children}
        </div>
    );
  }
}

export default Page;