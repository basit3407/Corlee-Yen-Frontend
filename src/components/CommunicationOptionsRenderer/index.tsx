import React from 'react'
import CommunicationBox from '../CommunicationBox'

interface CommunicationOption {
  htmlContent1: string
  messageOrCallTitle: string
}

interface CommunicationOptionsRendererProps {
  communicationOptions: CommunicationOption[]
}

const CommunicationOptionsRenderer: React.FC<
  CommunicationOptionsRendererProps
> = ({ communicationOptions }) => {
  return (
    <div className="flex flex-col gap-8">
      {communicationOptions.map((data, index) => (
        <CommunicationBox {...data} key={index} />
      ))}
    </div>
  )
}

export default CommunicationOptionsRenderer
