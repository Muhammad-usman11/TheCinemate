import React from 'react'
import { Link } from 'react-router-dom';
import Button  from "../components/Button";
import useTitle from '../hooks/useTitle';

const PageNotFound = () => {
  const pageTitle = useTitle(`Page not found`);
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className=" text-2xl lg:text-7xl text-gray-700 font-bold my-10 dark:text-white">Oops! Page Not Found </p>
          <div className="max-w-lg">
            <img className="rounded" src="/images/error.png" alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Cinemate</Button>
            
          </Link>          
        </div>
      </section>
    </main>
  )
}

export default PageNotFound