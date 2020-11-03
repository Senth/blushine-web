import React from 'react'
import './MapPage.css'

interface Props {}

const MapPage: React.FC<Props> = (props) => {
  return <iframe className='dynmap' src='https://minecraft.senth.org/dynmap' title='Blushine Dynmap'></iframe>
}

export default MapPage
