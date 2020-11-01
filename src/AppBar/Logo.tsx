import React from 'react'
import { useViewport } from '../utils/ViewportProvider'

const fullLogo = '/images/blushine_text_logo_transparent.png'
const smallLogo = '/images/favicon-128.png'

interface Props {}

const Logo: React.FC<Props> = (props) => {
  let logo: string
  const { width } = useViewport()

  if (width > 750) {
    logo = fullLogo
  } else {
    logo = smallLogo
  }

  return <img className='logo' src={logo} alt='Logo' />
}

export default Logo
