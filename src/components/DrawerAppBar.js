import React, { Component } from 'react'
import PersonIcon from '@mui/icons-material/Person';
export class DrawerAppBar extends Component {
  render() {
    return (
      <nav
      className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-4 border-indigo-500">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
              <span className="font-semibold text-xl tracking-tight">HACKER NEWS</span>
          </div>
          <div className="block lg:hidden ">
              <button
                  id="nav"
                  className="flex items-center px-3 py-2 border-2 rounded text-indigo-500 border-indigo-500 hover:text-indigo-500 hover:border-indigo-500">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
              </button>
          </div>
      </div>
  
      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-indigo-500 lg:flex-grow">
              <a href="#responsive-header"
                 className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-indigo-500 mr-2">
                  New
              </a>
              <a href="#"
                 className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-indigo-500 mr-2">
                  Past
              </a>
              <a href="#"
                 className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-indigo-500 mr-2">
                  Comments
              </a>
              <a href="#"
                 className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-indigo-500 mr-2">
                  Ask
              </a>
              <a href="#"
                 className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-indigo-500 mr-2">
                  Show
              </a>
              <a href="#"
                 className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-indigo-500 mr-2">
                  Jobs
              </a>
              <a href="#"
                 className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-indigo-500 mr-2">
                  Submit
              </a>
          </div>
          
          <div className="flex ">
            
              <a href="#"
                 className=" block text-md px-4  ml-2 py-2 rounded text-indigo-500 font-bold hover:text-white mt-4 hover:bg-indigo-500 lg:mt-0"><PersonIcon></PersonIcon> login</a>
          </div>
      </div>
  
  </nav>
    )
  }
}

export default DrawerAppBar