import { useState, useEffect } from 'react'
import './arrowBackground.scss'
import arrow1 from '../../assets/arrow1.webp'
import arrow2 from '../../assets/arrow2.webp'

export default function ArrowBackground() {

    const [ offsetY, setOffsetY ] = useState(0)
    const [ infoWidth, setInfoWidth ] = useState()
    const handleScrool = () => setOffsetY(window.pageYOffset)
    const infoWondo = () => setInfoWidth(window.innerWidth)
    
  
    useEffect(() => {
        window.addEventListener('scroll', handleScrool)
        window.addEventListener('resize', infoWondo())
    
        return () => {
            window.removeEventListener('scroll', handleScrool)  
            window.addEventListener('resize', infoWondo)
        } 
    })

  return (
    <>
        <img 
            style={ infoWidth > 980 ? { transform: `translateY(${offsetY * 0.3}px`, display: 'flex'} : { display: 'none'}} 
            src={arrow1} 
            alt="" 
            className='arrowBackground arrow1'
        />
        <img 
            style={ infoWidth > 980 ? { transform: `translateY(${offsetY * 0.3}px`, display: 'flex'} : { display: 'none'}}
            src={arrow2} 
            alt="" 
            className='arrowBackground arrow2'
        />
    </>
  )
}
