import styles from './auth.module.css'
import { useForm } from 'react-hook-form'
import { useAuthMutation, useGetUsersQuery } from '../../store/authApi'




function Auth() {
  
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {}
    })
    const [authRegister, {dataAuth}] = useAuthMutation()
    const {data = [], isLoading} = useGetUsersQuery()
    console.log(data)

    const submit = async data => {
       await authRegister(...data).unwrap()
        console.log(data)
    }
    console.log(dataAuth)


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