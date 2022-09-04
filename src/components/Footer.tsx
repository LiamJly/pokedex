import React from 'react'


const Footer = () => {
  return (
    <footer className= "bg-indigo-200">
    <div  className="max-w-full px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
    <div className="pt-6 mt-12 border-t border-gray-100">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved.</span>

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="/"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="/"
          >
            Privacy Policy
          </a>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
          &copy; 2022 Liam Joly
        </p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer