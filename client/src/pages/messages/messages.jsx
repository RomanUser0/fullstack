import { useEffect, useRef, useState } from 'react'
import styles from './messages.module.css'
import axios from 'axios'




function Messages() {




    const filePick = useRef(null)
    const [selectedFile, setSelectedFile] = useState('')

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const handlePick = () => {
        filePick.current.click()


    }
    const handelUpload = () => {
        const formData = new FormData()
        formData.append('file', selectedFile)

        axios.post('api/users', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

    }







    return (
        <div className={styles.messages}>
            <button onClick={handlePick}>click</button>
            <input type='file'
                ref={filePick}
                onChange={handleChange}
            />
            <button onClick={handelUpload}>Отправить</button>
        </div>
    )
}


export default Messages