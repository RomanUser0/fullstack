import { Link } from 'react-router-dom'
import styles from './navigation.module.css'



function Navigation() {
    return (
        <div className={styles.navigation}>
            <ul>
                <li><Link to={'/'}>Profile</Link></li>
                <li><Link to={'/Messages'}>Messages</Link></li>
                <li><Link to={'/News'}>News</Link></li>
                <li><Link to={'/Music'}>Music</Link></li>
                <li><Link to={'/Settings'}>Settings</Link></li>
            </ul>
        </div>

    )
}

export default Navigation