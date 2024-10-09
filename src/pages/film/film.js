import './film.scss'
import { useState } from 'react'

import logoInstagram from '../../assets/instagram.svg'
import { Link } from 'react-router-dom'
import { data } from '../../data/LeStreamingDeLoulou/films-series'
import logoStreaming from '../../assets/film/logoStreaming.png'
import BA from '../../assets/film/bandeAnnonce.mp4'
import posterBA from '../../assets/film/bandeAnnonce.jpg'
import iconAccept from '../../assets/film/accept.svg'

export default function Film() {
    // Mot de passe pour accéder au site
    const password = 'loulou123'

    const [ activatesSoundHeader, setActivatesSoundHeader ] = useState(true)
    const [ captureScreenWidth, setCaptureScreenWidth ] = useState(window.innerWidth)

    // Active le soin de la bande-annonce au click
    const changesSoundStateAtClick = () => {
        setActivatesSoundHeader(!activatesSoundHeader)
    }

    // Capture la largeur de l'écran à chaque redimentionnement
    const captureScreenWidthOnResize = () => {
        setCaptureScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', captureScreenWidthOnResize)

    // Défini la date d'aujourd'hui (Fuseau horaire Europe/Paris (UTC+1))
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentDateWithOtherFormat = new Date(`${currentMonth}/${currentDay}/${currentYear}`)


    // Création d'un tableau qui classe les films du plus récent au plus ancient
    const onlineFilms = []

    const classifyFilms = data?.sort((evtA, evtB) => 
        new Date(evtA.dateDeSortie) > new Date(evtB.dateDeSortie) ? -1 : 1
    )
    classifyFilms?.map( txt => {
        // Calcul le nombre de jours qu'il reste au film avant sa suppression
        const filmDeletionDate = new Date(`${txt.outMonth}/${txt.outDay}/${txt.outYear}`)
        const differentInTime = filmDeletionDate.getTime() - currentDateWithOtherFormat.getTime()
        const differentInDay = differentInTime / (1000 * 3600 * 24)
        txt['filmDeletionDate'] = differentInDay

        // Gère la publication et la suppresion des films
        if(txt.day <= currentDay && txt.month <= currentMonth && txt.year <= currentYear && txt.filmDeletionDate > 0) {
            onlineFilms.push(txt)
        }
        return true
    })

    // Gestion du système de mot de passe pour accéder au site
    const [ passwordAccess, setPasswordAccess ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ error, setError ] = useState('')

    // Envoie la valeur de l'input dans le useState message
    const handleChange = event => {
        setMessage(event.target.value);
    };

    // Gère la validation du mot de passe
    const onSubmit = e => {
        e.preventDefault();
        if(message === password) {
            setPasswordAccess(true)
            localStorage.setItem("passwordCurrent", `${message}`)
        }
        setError('Mot de passe incorrect')
    }

    // Enlève le message d'erreur lorsque l'on resaisie le mot de passe
    const removeMessageError = () => {
        setError('')
    }


    if(localStorage.getItem('passwordCurrent') !== password) {
        if (passwordAccess === false) {
            return (
                <main className="pagePassword">
                    <div>
                        <img src={logoStreaming} alt="" />
                        <form>
                            <input type="password" value={message} onChange={handleChange} onClick={removeMessageError}/>
                            <button type="submit" onClick={onSubmit}>
                                <img src={iconAccept} alt="" />
                            </button>
                        </form>
                        <div className='streamingError'> {error} </div>
                        <a  href="https://www.instagram.com/lestreamingdeloulou/?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
                            <section>
                                <p>
                                    Pour des raisons de légalités, le site est protègé. 
                                    Pour avoir accès au mot de passe, abonné vous au 
                                    mon compte instagram @lestreamingdeloulou 
                                </p>
                            </section>
                        </a>
                    </div>
                </main>
            )
        }
    }
    return (
        <div className='PageFilm'>
            { captureScreenWidth > 900 ?
                <header className='PageFilm--header' onClick={changesSoundStateAtClick}>
                    <img src={logoStreaming} alt="" />
                    { activatesSoundHeader ? <video src={BA} autoPlay muted loop></video> : <video src={BA} loop></video>}
                    
                </header>
            :
                <header className='PageFilm--header' onClick={changesSoundStateAtClick}>
                    <img src={logoStreaming} alt="" />
                    { activatesSoundHeader ? <video src={BA} controls poster={posterBA}></video> : <video src={BA} loop></video>}
                </header>
            }
            <main className='PageFilm--main'>
                <div className='PageFilm--main__maxwidth'>
                    { onlineFilms &&
                    onlineFilms.map( item => (
                        <Link
                            to={{pathname : `${item.title}`}}
                            state={item}
                            key={item.id}
                        >
                            <img src={item.affiche} alt="" />
                            <div  className='jusqua'>
                                <p>Dispo. encore {item.filmDeletionDate} jours</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <footer className='PageFilm--footer'>
                <h2>Retrouver toutes les informations</h2>
                <a href="https://www.instagram.com/lestreamingdeloulou/?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
                    <img src={logoInstagram} alt="" />
                </a>
            </footer>
        </div>
    )
}
