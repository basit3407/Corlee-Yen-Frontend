import React, { useState } from 'react'
import SvgIcon1 from '../NavBar/icons/SvgIcon1'
import SvgIcon2 from '../NavBar/icons/SvgIcon2'
import SvgIcon3 from '../NavBar/icons/SvgIcon3'
import SvgIcon4 from '../NavBar/icons/SvgIcon4'
import SvgIcon5 from '../NavBar/icons/SvgIcon5'
import messages from './messages.json'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <img
        src="/assets/img_I1091_2359_992_9334_d3efe0.png"
        className="h-[18.5px] object-cover w-[147px] box-border"
      />
      <div className="flex items-center bg-[#f0f0f0] h-10 px-2.5 rounded-lg flex-grow max-w-[600px] mx-4">
        <SvgIcon2 className="w-6 h-6 text-[#999999]" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-transparent focus:outline-none w-full"
        />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 right-0 bg-white lg:flex lg:relative lg:top-0 lg:left-0 lg:right-auto lg:bg-transparent lg:ml-[47px] w-full lg:w-auto p-4 lg:p-0`}
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[55px] mt-4 lg:mt-0">
          <div className="flex items-center">
            <p className="text-lg font-medium text-black">
              {messages['products']}
            </p>
            <SvgIcon1 className="w-3 h-3 ml-2" />
          </div>
          <p className="text-lg font-medium text-black">{messages['events']}</p>
          <p className="text-lg font-medium text-black">
            {messages['about_us']}
          </p>
          <p className="text-lg font-medium text-black lg:hidden">
            {messages['call_us']}
          </p>
          <div className="flex gap-4 lg:hidden">
            <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-full">
              <SvgIcon3 className="w-6 h-6" />
            </div>
            <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-full">
              <SvgIcon4 className="w-6 h-6" />
            </div>
            <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-full">
              <SvgIcon5 className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4 lg:gap-[15px]">
        <p className="text-lg font-medium text-black">{messages['call_us']}</p>
        <div className="flex gap-4">
          <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-full">
            <SvgIcon3 className="w-6 h-6" />
          </div>
          <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-full">
            <SvgIcon4 className="w-6 h-6" />
          </div>
          <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-full">
            <SvgIcon5 className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
