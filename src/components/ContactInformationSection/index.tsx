import React from 'react'
import CommunicationOptionsRenderer from '../CommunicationOptionsRenderer'
import messages from './messages.json'

interface CommunicationOption {
  htmlContent1: string
  messageOrCallTitle: string
}

interface ContactInformationSectionProps {
  communicationOptions: CommunicationOption[]
  onClose: () => void
}

const ContactInformationSection: React.FC<ContactInformationSectionProps> = ({
  communicationOptions,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50">
      <div className="bg-white box-border flex flex-col gap-8 p-10 rounded-l-lg w-full max-w-md relative mt-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold uppercase text-black">
            {messages['call_us']}
          </p>
          <p className="text-sm font-medium text-gray-600 mt-4">
            {messages['we_just_one_message_away']}
          </p>
        </div>
        <CommunicationOptionsRenderer
          communicationOptions={communicationOptions}
        />
        <p className="text-lg font-medium text-black">
          {messages['need_help']}
        </p>
        <p className="text-base font-normal underline text-black cursor-pointer">
          {messages['contact_us']}
        </p>
      </div>
    </div>
  )
}

export default ContactInformationSection
