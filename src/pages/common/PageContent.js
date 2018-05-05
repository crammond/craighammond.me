import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './PageContent.css'

class PageContent extends Component {
  render() {
    return (
        <Container className='PageContent'>
            {this.props.children}
        </Container>
    );
  }
}

export default PageContent;