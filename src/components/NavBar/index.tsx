import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon1 from '../NavBar/icons/SvgIcon1'
import SvgIcon2 from '../NavBar/icons/SvgIcon2'
import SvgIcon3 from '../NavBar/icons/SvgIcon3'
import SvgIcon4 from '../NavBar/icons/SvgIcon4'
import SvgIcon5 from '../NavBar/icons/SvgIcon5'
import messages from './messages.json'
import ContactInformationSection from '../ContactInformationSection'
import { mockData } from '../../util'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleCallUsClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <img
          src="/assets/img_I1091_2359_992_9334_d3efe0.png"
          className="h-[18.5px] object-cover w-[147px] box-border"
        />
        <div className="hidden lg:flex items-center flex-grow justify-between">
          <div className="flex gap-8">
            <div className="flex items-center cursor-pointer">
              <p className="text-lg font-medium text-black">
                {messages['products']}
              </p>
              <SvgIcon1 className="w-3 h-3 ml-2" />
            </div>
            <Link
              to="/events"
              className="text-lg font-medium text-black cursor-pointer"
            >
              {messages['events']}
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-black cursor-pointer"
            >
              {messages['about_us']}
            </Link>
          </div>
          <div className="flex items-center bg-[#f0f0f0] h-10 px-2.5 rounded-lg flex-grow mx-4 max-w-[600px]">
            <SvgIcon2 className="w-6 h-6 text-[#999999]" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent focus:outline-none w-full"
            />
          </div>
          <div className="flex gap-8 items-center">
            <p
              className="text-lg font-medium text-black cursor-pointer"
              onClick={handleCallUsClick}
            >
              {messages['call_us']}
            </p>
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
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-16 left-0 right-0 bg-white z-50 p-4`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center cursor-pointer">
            <p className="text-lg font-medium text-black">
              {messages['products']}
            </p>
            <SvgIcon1 className="w-3 h-3 ml-2" />
          </div>
          <Link
            to="/events"
            className="text-lg font-medium text-black cursor-pointer"
          >
            {messages['events']}
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-black cursor-pointer"
          >
            {messages['about_us']}
          </Link>
          <p
            className="text-lg font-medium text-black cursor-pointer"
            onClick={handleCallUsClick}
          >
            {messages['call_us']}
          </p>
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
      {isModalOpen && (
        <ContactInformationSection
          communicationOptions={mockData.communicationOptions}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default NavBar
