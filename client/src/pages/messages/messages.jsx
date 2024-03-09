import { useEffect, useRef, useState } from 'react'
import styles from './messages.module.css'
import axios from 'axios'




function Messages() {


    useEffect(async () => {
       
    }, [])

        axios.post('api/users', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })


    const filePick = useRef(null)
    const [selectedFile, setSelectedFile] = useState('')

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const  handlePick =  () => {
        filePick.current.click()
       

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