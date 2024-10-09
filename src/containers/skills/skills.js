import './skills.scss'
import { data } from '../../data/skills'

export default function Skills() {
  return (
    <section className='skill'>
        <h2>
            Mes compétences
        </h2>
        <div className="skill--container">
            <ul>
                { data?.map( item => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}
