import styles from './profile.module.css'
import axios from 'axios'
import { useEffect } from 'react'




function Profile() {

    useEffect(() => {
       axios.get('api/users').then((req, res) => {
            console.log(res)
        })
    }, [])



    return (
        <div className={styles.profile}>

        </div>
    )
}


export default Profile