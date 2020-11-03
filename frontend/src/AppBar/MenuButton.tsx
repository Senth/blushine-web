import React from 'react'
import { Link } from 'react-router-dom'
import './MenuButton.css'

class MenuButton extends React.Component<MenuButtonProps> {
  render() {
    return (
      <Link className='menu-button' to={this.props.uri}>
        {this.props.text.toUpperCase()}
      </Link>
    )
  }
}

interface MenuButtonProps {
  text: string
  uri: string
}

export default MenuButton
