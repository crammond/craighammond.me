import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'

import PageHeader from './components/header/PageHeader';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
            <BrowserRouter>
              <div>
                <PageHeader/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
              </div>
            </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;
