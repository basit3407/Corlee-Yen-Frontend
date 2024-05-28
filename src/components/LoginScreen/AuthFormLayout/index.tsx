import { Button } from '@mui/base'
import StyledInputBox from '../StyledInputBox'
import PasswordInputWidget from '../PasswordInputWidget'
import './style.css'
import messages from './messages.json'

function AuthFormLayout() {
  return (
    <div className="flex justify-start items-stretch flex-col gap-4 grow-0 shrink-0 basis-auto">
      <StyledInputBox />
      <PasswordInputWidget />
      <div className="flex justify-between items-center flex-row gap-2 min-w-[463px] self-center grow-0 shrink-0 basis-auto box-border -ml-16">
        {/* Checkbox with Label Component is detected here. We've generated code using HTML because MUI Base doesn't have an applicable comment */}
        <div className="flex items-center relative box-border grow-0 shrink-0 basis-auto">
          <div className="h-4 w-4 border box-border relative flex items-center rounded-[3px] border-solid border-[gray]">
            <input
              id="remember me"
              type="checkbox"
              defaultChecked={false}
              className="h-full w-full absolute opacity-0 cursor-pointer m-0 peer"
            />
            <img className="w-4 h-4 max-w-[initial] hidden -ml-px -mt-px content-[url('data:image/svg+xml;charset=ut...Fg%3E%20%20%20%20%3C%2Fsvg%3E')] peer-checked:block hidden" />
          </div>
          <label
            htmlFor="remember me"
            className="[font-family:Inter,sans-serif] text-sm font-normal leading-[17px] text-[#666666] ml-[7px]"
          >
            {messages['remember_me']}
          </label>
        </div>
        <p className="[font-family:Inter,sans-serif] text-sm font-normal leading-[17px] underline text-[#666666] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
          {messages['forgot_password']}
        </p>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[black] [font-family:Inter,sans-serif] text-base font-semibold text-[white] min-w-[462px] h-12 cursor-pointer block box-border grow-0 shrink-0 basis-auto mt-2 rounded-[110px] border-[none]">
        {messages['login']}
      </Button>
      <div className="ml-[-65px] flex justify-start items-center flex-row self-center grow-0 shrink-0 basis-auto">
        <p className="[font-family:Inter,sans-serif] text-sm font-normal leading-[17px] text-[#666666] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
          {messages['dont_account']}
        </p>
        <p className="[font-family:Inter,sans-serif] text-sm font-semibold leading-[17px] underline text-[black] whitespace-pre-wrap grow-0 shrink-0 basis-auto ml-1.5 m-0 p-0">
          {messages['sign_up']}
        </p>
      </div>
    </div>
  )
}

export default AuthFormLayout
