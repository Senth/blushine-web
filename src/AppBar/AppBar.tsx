import React from 'react'
import MenuButton from './MenuButton'
import './AppBar.css'
import Logo from './Logo'

class AppBar extends React.Component {
  render() {
    return (
      <div className='app-bar'>
        <Logo />
        <MenuButton text='Home' uri='/' />
        <MenuButton text='Map' uri='/map' />
        <MenuButton text='Mods' uri='/mods' />
      </div>
    )
  }
}

export default AppBar
