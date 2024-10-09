import './button.scss'
import { Link } from 'react-router-dom'

export const BUTTON_TYPES = {
    DEFAULT: 1,
    CARD: 2,
    FOOTER: 3,
    BIOGRAPHY: 4,
}

const Button = ({ link, type, children }) => {
    switch (type) {
        case BUTTON_TYPES.DEFAULT:
            return (
                <a
                    href={link}
                    className='btn btn--default'
                >
                    {children}
                </a>
            );
        case BUTTON_TYPES.CARD:
            return (
                <a
                    href={link}
                    className="btn btn--card"
                >
                    {children}
                </a>
            );
        case BUTTON_TYPES.FOOTER:
            return (
                <input
                    className="btn btn--footer"
                    type='submit'
                    value="ME CONTACTER PAR MAIL"
                ></input>
            );
        case BUTTON_TYPES.BIOGRAPHY:
            return (
                <Link
                to={'/cv'}
                    className="btn btn--biography"
                >
                    {children}
                </Link>
            );
    

        default:
            return (
                <a
                    href={link}
                    className="btn btn--default"
                >
                    {children}
                </a>
            );
    }
}

export default Button;
