import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAdminLoginMutation } from '../../feature/auth/authApiSlice'
import { useDispatch } from 'react-redux'
import { setAdminCredentails } from '../../feature/admin/adminAuthSlice'
const AdminLogin = () => {
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [AdminLogin, { data, isError, error: err,isLoading }] = useAdminLoginMutation()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await AdminLogin({ email: data.email, password: data.password })
            if (response?.error) {
                return setMessage(response?.error?.data?.message)
            }
            console.log(response.data)
            if (response?.data?.role !== 'admin') {
                return setMessage('Unauthorized User try Again.')
            }
            dispatch(setAdminCredentails({
                email: data.email,
                accessToken: response?.data?.token,
                imgUrl: 'hello',
                role: response?.data?.role
            }))
            navigate('/dashboard')
        } catch (error) {
            setMessage('inCorrect credenials')
            console.log(error)
        }
    }


    return (
        <div className='w-[calc(100vh - 120px)] flex justify-center items-center'>
            <div className='w-full max-w-sm mx-auto rounded bg-white shadow-md px-8 pt-6 pb-8 mb-4'>
                <h1 className='text-xl font-semibold mb-4'>Admin Login </h1>
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
                    <button className='btn-primary w-full'>{isLoading ? 'submiting...': 'login'}</button>
                </form>

                <p className='mt-5 text-gray-500 text-xs text-center'>Book store 2026: All Right Reserved.</p>
            </div>
        </div>
    )
}

export default AdminLogin
