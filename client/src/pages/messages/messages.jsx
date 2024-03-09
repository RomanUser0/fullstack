import { useEffect, useRef, useState } from 'react'
import styles from './messages.module.css'
import axios from 'axios'




function Messages() {




    const filePick = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null)
    console.log(selectedFile)

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const handlePick = () => {
        filePick.current.click()


    }
    const handelUpload = async () => {
        const formData = new FormData()
        formData.append('file', selectedFile, selectedFile.name)

        await axios.post('api/users', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res)
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