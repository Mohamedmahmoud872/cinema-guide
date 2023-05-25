import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Image from '../assets/images/pagenotfound.png';

export const PageNotFound = () => {

  useEffect(() => {
    document.title = "Page Not Found";
  })

  return (
    <main>
      <section className="flex justify-evenly items-center py-6 phone:flex-col">
        <div className="flex flex-col items-center">
          <p className="text-6xl text-gray-700 mb-5 dark:text-white">Page Not Found</p>
          <div className="max-w-xl">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="flex justify-center phone:mt-6">
          <Link to="/">
            <button className="w-56 p-2.5 rounded-lg text-xl bg-gradient-to-r from-indigo-500 text-gray-700 dark:text-white">Back To Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
