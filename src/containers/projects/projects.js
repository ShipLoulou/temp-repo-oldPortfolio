import './projects.scss'
import Card from '../../components/card/card'
import { data } from '../../data/projects'
import decoration from '../../assets/decoration.svg'

export default function Projects() {
  return (
    <section className='cardLibrary'>
        <div>
            <img 
                src={decoration} 
                alt="décoration pour le site web" 
                className="imgSvg"
            />
        </div>
        { data.map( item => (
                <Card
                    key={item?.title}
                    picture={item?.picture}
                    title={item?.title}
                    technologyUsed={item?.technologyUsed}
                    decription={item?.decription}
                    link={item?.link}
                />
            ))}
    </section>
  )
}
