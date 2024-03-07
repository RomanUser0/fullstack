import styles from './profile.module.css'





function Profile() {

    useEffect(() => {
        axios.post('api/users', { username: 'roman', password: 'password' }).then((res, req) => {
            console.log(res)
        })
    }, [])



    return (
        <div className={styles.profile}>

        </div>
    )
}


export default Profile