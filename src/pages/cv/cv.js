import './cv.scss'
import CV from '../../assets/mon-CV.webp'

export default function Cv() {
  return (
    <main className='cv--container'>
        <img 
          src={CV} 
          alt="curriculum vitae" 
          className='cv'
        />
    </main>
  )
}
