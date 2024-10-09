import { useState, useEffect } from 'react'
import './upButton.scss'

export default function UpButton() {

    const [ offsetY, setOffsetY ] = useState(0)
    const [ displayNone, setDisplayNone ] = useState('none')
    const handleScrool = () => setOffsetY(window.pageYOffset)

    setTimeout(() => {
        setDisplayNone('')
    }, 600);

    const TopScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScrool)
  
      return () => window.removeEventListener('scroll', handleScrool)
    }, [])

  return (
    <span
        className={ offsetY > 1200 ? 'upBtn animationOpen flex' : `upBtn animationClose ${displayNone}`}
        onClick={TopScroll}
    >   
        <i className="fa-solid fa-chevron-up"></i>
    </span>
  )
}
