import { Route, Routes } from 'react-router-dom'
import Messages from '../../pages/messages/messages'
import Profile from '../../pages/profile/profile'
import styles from './content.module.css'



function Content() {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='messages' element={<Messages />} />
            </Routes>
        </div>
    )
}


export default Content