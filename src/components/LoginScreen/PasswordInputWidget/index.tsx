import { Input } from '@mui/base'

function PasswordInputWidget() {
  return (
    <div className="ml-[-65px] min-w-[462px] self-center grow-0 shrink-0 basis-auto box-border">
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input
        slotProps={{
          root: {
            className:
              'border h-12 w-[100.00%] box-border [font-family:Inter,sans-serif] text-base font-normal text-[#666666] flex flex-row items-center [justify-content:start] pl-[15px] rounded-lg border-solid border-[#ebebeb]',
          },
          input: {
            className:
              'w-full bg-transparent [font-family:Inter,sans-serif] text-base font-normal [outline:none] box-border border-[none] text-[#666666]',
            placeholder: 'Password',
            type: 'text',
          },
        }}
      />
    </div>
  )
}

export default PasswordInputWidget
