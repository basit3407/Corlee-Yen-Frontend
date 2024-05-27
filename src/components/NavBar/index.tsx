import React from 'react'
import SvgIcon1 from '../NavBar/icons/SvgIcon1'
import SvgIcon2 from '../NavBar/icons/SvgIcon2'
import SvgIcon3 from '../NavBar/icons/SvgIcon3'
import SvgIcon4 from '../NavBar/icons/SvgIcon4'
import SvgIcon5 from '../NavBar/icons/SvgIcon5'
import messages from './messages.json'

const NavBar = () => {
  return (
    <div className="flex justify-start items-center flex-row self-center grow-0 shrink-0 basis-auto">
      <img
        src="/assets/img_I1091_2359_992_9334_d3efe0.png"
        className="h-[18.5px] max-w-[initial] object-cover w-[147px] box-border block border-[none]"
      />
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto ml-[47px]">
        <div className="flex justify-start items-center flex-row gap-[55px] grow-0 shrink-0 basis-auto">
          <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
            <p className="[font-family:Inter,sans-serif] text-lg font-medium text-[black] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
              {messages['products']}
            </p>
            <SvgIcon1 className="w-3 h-3 flex grow-0 shrink-0 basis-auto ml-[7.25px]" />
          </div>
          <p className="[font-family:Inter,sans-serif] text-lg font-medium text-[black] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
            {messages['events']}
          </p>
          <p className="[font-family:Inter,sans-serif] text-lg font-medium text-[black] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
            {messages['about_us']}
          </p>
        </div>
        <div className="flex justify-start items-center flex-row gap-[15px] grow-0 shrink-0 basis-auto ml-[93px]">
          <div className="bg-[#f0f0f0] box-border flex justify-center items-stretch flex-col h-10 grow-0 shrink-0 basis-auto pl-2.5 pr-[343px] rounded-lg">
            <SvgIcon2 className="w-6 h-6 text-[#999999] flex grow-0 shrink-0 basis-auto" />
          </div>
          <p className="[font-family:Inter,sans-serif] text-lg font-medium text-[black] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
            {messages['call_us']}
          </p>
          <div className="flex justify-start items-stretch flex-row gap-4 h-12 grow-0 shrink-0 basis-auto box-border">
            <div className="bg-[#f0f0f0] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-2 rounded-[120px]">
              <SvgIcon3 className="w-8 h-8 flex grow-0 shrink-0 basis-auto" />
            </div>
            <div className="bg-[#f0f0f0] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-2 rounded-[120px]">
              <SvgIcon4 className="w-8 h-8 flex grow-0 shrink-0 basis-auto" />
            </div>
            <div className="bg-[#f0f0f0] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-2 rounded-[120px]">
              <SvgIcon5 className="w-8 h-8 flex grow-0 shrink-0 basis-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
