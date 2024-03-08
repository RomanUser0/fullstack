import styles from './profile.module.css'
import axios from 'axios'
import { useEffect } from 'react'




function Profile() {

    useEffect(async () => {
       await axios.post('api/users', {username:"roman5", password:"password"}).then((req, res) => {
            console.log(res)
        })
    }, [])



    return (
        <div className={styles.profile}>

        </div>
    )
}


export default Profile