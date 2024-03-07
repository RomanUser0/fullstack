import styles from './header.module.css'
import avatar from '../../assets/images/Avatar.png'


function Header() {
    return(
        <header className={styles.header}>
            <img src={avatar}  className={styles.avatar}/>
        </header>
    )
}


export default Header