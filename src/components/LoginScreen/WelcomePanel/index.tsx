import { Button } from '@mui/base'
import DesignElements from '../DesignElements'
import AuthFormLayout from '../AuthFormLayout'
import SvgIcon1 from './icons/SvgIcon1'
import messages from './messages.json'

function WelcomePanel() {
  return (
    <div className="bg-[white] box-border flex justify-start items-center flex-row min-w-[1280px] px-[47px] py-4 rounded-3xl">
      <div className="flex justify-center items-stretch flex-col gap-6 w-[44.60%] grow-0 shrink-0 basis-auto box-border py-[63px]">
        <p className="[font-family:Artnoova] text-[40px] font-semibold text-center leading-[48px] text-[black] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
          {messages['welcome_corlee']}
        </p>
        <p className="[font-family:Inter,sans-serif] text-base font-normal text-center text-[#666666] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
          {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
        </p>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="bg-[white] [font-family:Inter,sans-serif] text-base font-semibold text-[black] min-w-[276px] h-12 w-[276px] cursor-pointer inline-flex items-center justify-center gap-[3.5px] box-border ml-[-65px] self-center grow-0 shrink-0 basis-auto rounded-[110px] border-2 border-solid border-[#ebebeb]">
          <SvgIcon1 className="w-8 h-8 flex" />
          {messages['login_google']}
        </Button>
        <DesignElements />
        <AuthFormLayout />
      </div>
      <div className="flex justify-start items-end flex-col w-[55.40%] grow-0 shrink-0 basis-auto box-border">
        <img
          src="/assets/img_1091_3084_2be7f2.jpeg"
          className="h-[562px] max-w-[initial] object-cover w-[673px] box-border block ml-[-31px] mr-[-31px] rounded-[40px] border-[none]"
        />
      </div>
    </div>
  )
}

export default WelcomePanel
