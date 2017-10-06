import React, { Component } from 'react';
import PageHeader from './components/header/PageHeader'
import { Container } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <PageHeader/>
        <Header as='h1'>Hello, welcome to craighammond.me!</Header>
        <p>
          There's not a lot going on here yet.
          For now, you can check out
          my <a href="https://www.linkedin.com/in/hammondcraigr/">LinkedIn</a>.
          Or not. I'm a website not a cop.
        </p>
      </Container>
    );
  }
}

export default App;
