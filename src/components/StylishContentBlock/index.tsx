import { Button } from '@mui/base'
import SvgIcon1 from './icons/SvgIcon1'
import messages from './messages.json'

function StylishContentBlock() {
  return (
    <div className="h-[500px] w-full lg:w-auto bg-cover bg-no-repeat bg-center bg-[url('/assets/Rectangle%2030.png')] rounded-3xl border-none -mt-14 pl-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center py-20 lg:py-48">
        <p className="font-family-Artnoova text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wide leading-tight text-white text-center">
          {messages['material']}
        </p>
        <Button className="bg-[#6a6a45] font-family-Inter text-base font-semibold text-white min-w-[194px] h-12 cursor-pointer flex items-center justify-center gap-2 mt-8 rounded-full">
          {messages['explore_more']}
          <SvgIcon1 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default StylishContentBlock
