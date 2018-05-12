import React, { Component } from 'react'
import PageContent from './common/PageContent'
import Terminal from '../components/terminal/Terminal'

class Home extends Component {
  render() {
    return (
        <PageContent>
          <Terminal
            style={{
              width: '70%',
              margin: '0 auto'
            }}
          />
        </PageContent>
    );
  }
}

export default Home;
