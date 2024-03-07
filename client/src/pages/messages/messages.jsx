import { useEffect, useRef, useState } from 'react'
import styles from './messages.module.css'
import axios from 'axios'




function Messages() {


    useEffect(() => {
        axios.post('api/users', { username: 'roman', password: 'password' }).then((res, req) => {
            console.log(res)
        })
    }, [])




    const filePick = useRef(null)
    const [selectedFile, setSelectedFile] = useState('')

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const  handlePick = async () => {
        filePick.current.click()
        await axios.post('api/users', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res)
        })

    }

    const formData = new FormData()
    formData.append('file', selectedFile)





    return (
        <div className={styles.messages}>
            <button onClick={handlePick}>click</button>
            <input type='file'
                ref={filePick}
                onChange={handleChange}
            />
        </div>
    )
}


export default Messages