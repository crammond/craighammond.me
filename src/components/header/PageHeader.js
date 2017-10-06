import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class PageHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default PageHeader
