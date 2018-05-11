import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import './PageContent.css'

class PageContent extends Component {
  render() {
    return (
        <Container className='PageContent' text={this.props.text}>
          {this.props.title && <Header as='h2'>{this.props.title}</Header>}
          {this.props.children}
        </Container>
    );
  }
}

export default PageContent;