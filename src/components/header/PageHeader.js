import React, { Component } from 'react'
import { Header, Icon, Menu } from 'semantic-ui-react'
import { Link, withRouter }  from 'react-router-dom'
import './PageHeader.css'

const menuLinks = [
  {
    name: 'home',
    link: '/'
  },
  {
    name: 'about',
    link: '/about'
  }
]

const menuIcons = [
  {
    icon: 'linkedin square',
    href: 'https://www.linkedin.com/in/hammondcraigr/'
  }
]

class PageHeader extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <div className='PageHeader'>
        <Header as='h1'>craig hammond dot me</Header>
        <Menu secondary>
          {
            menuLinks.map(it => (
              <Menu.Item 
                name={it.name}
                key={it.name}
                active={it.link === pathname}
                as={Link} 
                to={it.link}
              />
            ))
          }
          <Menu.Menu position='right'>
            {
              menuIcons.map(it => (
                <Menu.Item
                  key={it.icon}
                  icon={<Icon name={it.icon} size='big'/>}
                  href={it.href}
                  target='_blank'
                />
              ))
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(PageHeader)
