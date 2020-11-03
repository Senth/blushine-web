import React from 'react'

const viewportContext = React.createContext({ width: window.innerWidth, height: window.innerHeight })

interface Props {}

const ViewportProvider: React.FC<Props> = (props) => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [height, setHeight] = React.useState(window.innerHeight)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return <viewportContext.Provider value={{ width, height }}>{props.children}</viewportContext.Provider>
}

export const useViewport = () => {
  const size = React.useContext(viewportContext)
  return size
}

export default ViewportProvider
