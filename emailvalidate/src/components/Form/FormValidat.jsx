import './FormValidate.css'
import { useState } from "react"
import { useSelector } from "react-redux"
import { fetchCheckEmail } from "../../redux/CheckEmail/CheckEmailSlice"
import { useDispatch } from "react-redux"
import { ShieldCheckIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline'

const FormValidat = () => {

    const dispatch = useDispatch()
    const [data, setData] = useState({})

    const {message, error} = useSelector((state) => state.checkEmail)

    const handlechange = (e) => {
        const {name, value} = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(fetchCheckEmail(data))
    }

    return (
      <>
        <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                Free email address validator
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handlesubmit} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handlechange}
                    autoComplete="email"
                    placeholder="example@example.com"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 bg-gray-900 dark:bg-blue-500 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm dark:hover:bg-blue-400 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Validate
                </button>
              </div>
            </form>
            <p className="py-2 overflow-hidden h-20 box-message">
                {error && error}<br></br>
                {message && message.exist ? 
                    <p className="text-green-500 flex message active">
                        <ShieldCheckIcon className="block mx-2 h-6 w-6" aria-hidden="true" />
                        {message.message}
                    </p> : 
                    message.exist === false ? <p className="text-red-500 flex message active">
                    <ShieldExclamationIcon className="block mx-2 h-6 w-6" aria-hidden="true"/>
                    {message.message}
                    </p> : ""
                }<br></br>
            </p>
          </div>
        </div>
      </>
    )
  }


export default FormValidat