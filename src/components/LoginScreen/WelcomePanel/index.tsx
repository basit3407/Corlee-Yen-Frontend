import { Button } from '@mui/base'
import DesignElements from '../DesignElements'
import AuthFormLayout from '../AuthFormLayout'
import SvgIcon1 from './icons/SvgIcon1'
import messages from './messages.json'

function WelcomePanel() {
  return (
    <div className="bg-[white] box-border flex justify-center items-center min-h-screen px-4 py-8">
      <div className="bg-[white] shadow-lg rounded-3xl flex flex-row w-full max-w-6xl">
        <div className="flex justify-center items-stretch flex-col gap-6 w-1/2 p-8">
          <p className="[font-family:Artnoova] text-4xl font-semibold text-center leading-tight text-[black] whitespace-pre-wrap">
            {messages['welcome_corlee']}
          </p>
          <p className="[font-family:Inter,sans-serif] text-base font-normal text-center text-[#666666] whitespace-pre-wrap">
            {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
          </p>
          <Button className="bg-[white] [font-family:Inter,sans-serif] text-base font-semibold text-[black] min-w-[276px] h-12 cursor-pointer inline-flex items-center justify-center gap-[3.5px] box-border mx-auto rounded-[110px] border-2 border-solid border-[#ebebeb]">
            <SvgIcon1 className="w-8 h-8 flex" />
            {messages['login_google']}
          </Button>
          <DesignElements />
          <AuthFormLayout />
        </div>
        <div className="flex justify-center items-center w-1/2 p-8">
          <img
            src="/assets/img_1091_3084_2be7f2.jpeg"
            className="max-w-full h-auto rounded-3xl shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default WelcomePanel
