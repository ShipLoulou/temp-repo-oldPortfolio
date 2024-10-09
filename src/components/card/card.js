import './card.scss'
import Button, { BUTTON_TYPES } from '../button/button'

export default function Card({ picture, title, technologyUsed, decription, link }) {
  return (
    <article className='card'>
        <img 
            src={picture} 
            alt={`représentation du projet ${title}`}
        />
        <h2>
            {title}
        </h2>
        <p>
            {technologyUsed}
        </p>
        <p>
            {decription}
        </p>
        <Button type={BUTTON_TYPES.CARD} link={link}>
            VOIR LE PROJET
        </Button>
    </article>
  )
}
