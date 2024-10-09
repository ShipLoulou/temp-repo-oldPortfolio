import './footer.scss'
// import Button, { BUTTON_TYPES } from '../../components/button/button'

export default function Footer() {

    const data = [
        {
            "icon": <i className="fa-solid fa-envelope"></i>,
            "text": "boilevemael.dev@gmail.com"
        },
        {
            "icon": <i className="fa-solid fa-phone"></i>,
            "text": "+33 6 95 86 53 33 "
        },
        {
            "icon": <i className="fa-solid fa-location-dot"></i>,
            "text": "Amiens 80000"
        }
    ]

    return (
        <footer className='footer'>
            <h2>
                Me contacter
            </h2>
            <div className="footer--container">
                <div className="footer--text">
                    <p>
                        Besoin de plus d'informations ?
                        <br />
                        <strong>
                            Ne pas hésiter à me contacter par mail ou par téléphone.
                        </strong>
                    </p>
                    {/* <form 
                        action="mailto:boilevemael.dev@gmail.com"
                        className='footer--btn'
                    >
                        <Button type={BUTTON_TYPES.FOOTER} />
                    </form> */}
                </div>
                <div className="footer--location">
                    { data.map( item => (
                    <div key={item?.text}>
                        {item?.icon}
                        <p>
                            {item?.text}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
