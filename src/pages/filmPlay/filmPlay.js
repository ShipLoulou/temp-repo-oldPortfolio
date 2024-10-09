import './filmPlay.scss'
import { useState } from 'react'
import { data } from '../../data/LeStreamingDeLoulou/films-series'
import { useLocation } from 'react-router-dom'

export default function FilmPlay() {

    const [index, setIndex] = useState(0)

    const test = (e) => {
        setIndex(e.target.value)
    }

    let allEpisode = []

    let location = useLocation()

    const select = () => {
        let titlePage = location.state.title

        data.map( item => {
            if(item.title === titlePage) {
                allEpisode.push(item.video)
            }
            return true
        })
    }
    select()

    console.log();

    if(location.state.type === "film") {
        return (
            <div className='PageFilmPlay'>
                <div className='PageFilmPlay--container'>
                    <div className='PageFilmPlay--container--header'>
                        <img className='item1' src={location.state.affiche} alt="" />
                        <h1>
                            {location.state.title}
                        </h1>
                    </div>
                    <video
                        src={location.state.video}
                        controls
                        preload='auto'
                        buffered="true"
                        poster={location.state.poster}
                    ></video>
                </div>
            </div>
        )
    }
    if(location.state.type === "serie") {
        return (
            <div className='PageFilmPlay'>
                <div className='PageFilmPlay--container'>
                    <div className='PageFilmPlay--container--header'>
                        <img className='item1' src={location.state.affiche} alt="" />
                        <h1>
                            {location.state.title}
                        </h1>
                    </div>
                    <video
                        src={allEpisode[0][index].video}
                        controls
                        preload='auto'
                        buffered="true"
                        poster={location.state.poster}
                    ></video>
                    <ul className='PageFilmPlay--container--NumberEpisode'>
                        { allEpisode[0].map ( item => (
                            <li
                                value={item.id - 1}
                                key={item.id}
                                onClick={test}
                            >
                                { item.title }
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        )
    }

}
