import './noRepley.scss'
import { Link } from 'react-router-dom'

export default function NoRepley() {
    return (
        <div className="error">
        <img src="https://ghrce.raisoni.net/assets/images/gif/404.gif" alt="error"/>
        <h1>error 404</h1>
        <p>The page you are searching for does not exist.</p>
        <Link to="/" className="main-nav-item">
            Return to the homepage
        </Link>
        </div>
    )
}
