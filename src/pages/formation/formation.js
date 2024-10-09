import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './formation.scss'
import FormationCard from '../../components/formationCard/formationCard'
import { data } from '../../data/formation'

export default function Formation() {
    const [ animation, setAnimation ] = useState(false)
    const [ startAnimationTitle, setStartAnimationTitle ] = useState('animationStartTitle')
    const [ startAnimationText, setStartAnimationText ] = useState('animationStartText')
    const [ state, setState ] = useState(null)

    const hoverItem = (e) => {
        setState(e.target.id);
        setAnimation(false)
    }
    const nullItem = () => {
        setState(null);
        setAnimation(true)
    }
        
    let introTitle;
    let introText;

    if(state === null) {
        introTitle = "Présentation des projets réalisés au cours de ma formation"
        introText = "J'ai réalisé un ensemble de 12 projets. J'ai acquis les aptitudes de base d'un développeur web qui sont le HTML, le CSS et le JavaScript. J'ai aussi appris à utiliser la librairie React avec @redux/toolkit. L'optimisation SEO et le débuggage de site web font également partie de mes compétences."
    } else {
        introTitle = data[state]?.title
        introText = data[state]?.presentation
    }

    useEffect(() => {

        setTimeout(() => {
            setStartAnimationTitle('opacity')
            setStartAnimationText('opacity')
        }, 2500);

    }, [])
    

    return (
        <>
            <div className="responsive">
                <p>Non disponible en version tablette et mobile</p>
                <p><span>En cours de realisation ...</span></p>
            </div>
            <Link className='imgHome' to="/">
                .www
                <i className="fa-solid fa-arrow-pointer"></i>
            </Link>
            <div className="bg"></div>
            <div className="bg2"></div>

            <div className='formationContainer'>
                <div className="left">
                    <div>
                        <h1 
                            className={ animation ? `animation ${startAnimationTitle}` : `${startAnimationTitle}`}
                        >
                            {introTitle}
                        </h1>
                        <p 
                            className={ animation ? `animation ${startAnimationText}` : `${startAnimationText}`}
                        >
                            {introText}
                        </p>       
                    </div>
                </div>
                <div className="right">
                    <ul>
                        { data.map( item => (
                                <li
                                    key={item.title}
                                    onMouseEnter={hoverItem}
                                    onMouseLeave={nullItem}
                                >
                                    <span 
                                        className='capture'
                                        id={item.id}
                                    ></span>
                                        <FormationCard
                                            image = {item.image}
                                            alt = {item.alt}
                                            title = {item.title}
                                            children = {item.content}
                                        />
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
