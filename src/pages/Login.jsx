import React from 'react'
import Navbar from '../Components/Navbar'
import { signin } from "../api.jsx"
import { toast } from 'react-toastify'

function Login() {
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const signinHanlder = () => {
    if (email === '' || password === '') {
      toast.error("Tidak Boleh Kosong!")
    } else {
      signin(email, password)
    }
  }

  return (
    <>
      <Navbar />

      <div className="bg-white w-screen flex items-center h-screen py-6 sm:py-8 lg:py-12">
        <div className="mx-auto h-full pt-44 px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Masuk</h2>

          <div className="mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type='email' name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              </div>

              <button onClick={() => signinHanlder()} className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Masuk</button>

            </div>
            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">Tidak punya akun? <a href="/register" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Daftar Sekarang!</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login