import { useState } from 'react'
import styles from './auth.module.css'
import { useForm } from 'react-hook-form'
import { useAuthMutation } from '../../store/authApi'




function Auth() {
  
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {}
    })
    const [authRegister, {data}] = useAuthMutation()

    const submit = data => {
        authRegister(data)
    }
    console.log(data)


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='username' {...register('username',{required: true})}></input>
                <input type='password' {...register('password')}></input>
                <button>зарегестрироваться</button>
            </form>

        </div>
    )
}



export default Auth