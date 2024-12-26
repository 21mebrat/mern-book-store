import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const [message, setMessage] = useState('')
    const { googleSignIn,login } = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const onSubmit = async(data) => {
        try {
            await login(data.email,data.password)
            navigate('/')

        } catch (error) {
            console.log('loginform error on firebase', error)
        }
    }
    const handleGoogleSignin = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log('loginform error on firebase', error)
        }
    }

    return (
        <div className='w-[calc(100vh - 120px)] flex justify-center items-center'>
            <div className='w-full max-w-sm mx-auto rounded bg-white shadow-md px-8 pt-6 pb-8 mb-4'>
                <h1 className='text-xl font-semibold mb-4'>Please Login </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-sm capitalize text-gray-700 font-semibold mb-2'>email</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            name="email"
                            placeholder='Email Adress'
                            className='shadow appearance-none border rounded w-full leading-tight focus:outline-none px-6 py-2'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block capitalize text-sm text-gray-700 font-semibold mb-2'>password</label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            name="password"
                            placeholder='Email Adress'
                            className='shadow appearance-none border rounded w-full leading-tight focus:outline-none px-6 py-2'
                        />
                    </div>
                    {message &&
                        <p className='text-red-500 italic mb-3 text-center'>{message}</p>
                    }
                    <button className='btn-primary w-full'>login</button>
                </form>
                <p className='align-baseline font-medium text-sm mt-4'>Have't Account ? please <Link className='underline font-semibold text-orange-600' to='/register'>Register</Link></p>
                {/* signin with google */}
                <div className='mt-4'>
                    <button onClick={handleGoogleSignin} className='flex flex-wrap gap-1 justify-center items-center px-4 py-2 rounded w-full bg-orange-500 text-white font-bold hover:bg-orange-300 outline-none'>
                        <FaGoogle className='ml-3' />
                        login with google
                    </button>
                </div>
                <p className='mt-5 text-gray-500 text-xs text-center'>Book store 2026: All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Login
