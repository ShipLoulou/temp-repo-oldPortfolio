import './header.scss'
import { data } from '../../data/header'
import Button, { BUTTON_TYPES } from '../../components/button/button'

export default function Header() {
    return (
        <header className='header'>
            <div className='header--container'>
                <div className='header--block'>
                    <h1>
                        {data[0]?.topHeading}
                        <br />
                        {data[0]?.bottomHeading}
                    </h1>
                    <p className='header--text'>
                        {data[0]?.lineOne}
                        <br />
                        {data[0]?.lineTwo}
                        <br />
                        {data[0]?.lineThree}
                    </p>
                    <p className='header--text'>
                        {data[0]?.location}
                    </p>
                    <i className="fa-solid fa-ellipsis"></i>
                    <div>
                        <Button 
                            type={BUTTON_TYPES.DEFAULT} 
                            link={'https://www.linkedin.com/in/ma%C3%ABl-boileve-50859917a/'}
                        >
                            VOIR MON PROFIL LINKEDIN
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
