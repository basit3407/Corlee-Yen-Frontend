import React from 'react'
import SvgIcon1 from './icons/SvgIcon1'

interface CommunicationBoxProps {
  htmlContent1: string
  messageOrCallTitle: string
}

const CommunicationBox: React.FC<CommunicationBoxProps> = ({
  htmlContent1,
  messageOrCallTitle,
}) => {
  return (
    <div className="flex items-center">
      <SvgIcon1 className="w-6 h-6" htmlContent1={htmlContent1} />
      <p className="text-base font-normal text-black ml-6">
        {messageOrCallTitle}
      </p>
    </div>
  )
}

export default CommunicationBox
