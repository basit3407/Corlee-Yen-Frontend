import { Button } from '@mui/base'
import SvgIcon1 from './icons/SvgIcon1'
import messages from './messages.json'

function StylishContentBlock() {
  return (
    <div className="[background:url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%2279.0000%201003.0000%201281.0000%20500.0000%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22pattern0\_1091\_2267%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cuse%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xlink%3Ahref%3D%22%23image0\_1091\_2267%22%20transform%3D%22matrix(0.000296033%200%200%200.000758437%200%20-0.357792)%22%2F%3E%3C%2Fpattern%3E%3Cimage%20id%3D%22image0\_1091\_2267%22%20data-name%3D%22Material.jpg%22%20width%3D%223378%22%20height%3D%222262%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xlink%3Ahref%3D%22blob%3Ahttps%3A%2F%2Fapp.kombai.com%2F5d3417cc-35a4-47e0-8d02-7b34bbff6dcb%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%2F%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Rectangle%2030%22%20data-node-id%3D%221091%3A2282%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%2279%22%20y%3D%221003%22%20width%3D%221281%22%20height%3D%22500%22%20rx%3D%2224%22%20fill%3D%22url(%23pattern0\_1091\_2267)%22%2F%3E%3Crect%20x%3D%2279%22%20y%3D%221003%22%20width%3D%221281%22%20height%3D%22500%22%20rx%3D%2224%22%20fill%3D%22black%22%20fill-opacity%3D%220.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')_50%_/_cover_no-repeat] h-[500px] max-w-[initial] box-border flex justify-start items-center flex-col grow-0 shrink-0 basis-auto -mt-14 pl-[2.5px] rounded-3xl border-[none]">
      <div className="flex justify-center items-stretch flex-col py-[199px]">
        <p className="[font-family:Artnoova] text-5xl font-semibold tracking-[2.40px] leading-5 text-[white] whitespace-pre-wrap self-center grow-0 shrink-0 basis-auto m-0 p-0">
          {messages['material']}
        </p>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="bg-[#6a6a45] [font-family:Inter,sans-serif] text-base font-semibold text-[white] min-w-[194px] h-12 cursor-pointer inline-flex items-center justify-center gap-[5.75px] box-border grow-0 shrink-0 basis-auto ml-[20.5px] mr-[23px] mt-[34px] rounded-[110px] border-[none]">
          {messages['explore_more']}
          <SvgIcon1 className="w-3.5 h-3.5 flex" />
        </Button>
      </div>
    </div>
  )
}

export default StylishContentBlock
