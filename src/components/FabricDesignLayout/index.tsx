import { Button } from '@mui/base'
import FabricInfoSection from '../HomeScreen/FabricInfoSection'
import ImageCard from '../HomeScreen/ImageCard'
import StylishContentBlock from '../StylishContentBlock'
import FabricDesignRenderer from '../HomeScreen/FabricDesignRenderer'
import RealizationDisplay from '../HomeScreen'
import SvgIcon1 from './icons/SvgIcon1'
import SvgIcon2 from './icons/SvgIcon2'
import SvgIcon3 from './icons/SvgIcon3'
import messages from './messages.json'
import { FabricDesignCard } from '../../@types'

interface Props {
  fabricDesignCardsData: FabricDesignCard[]
}

const FabricDesignLayout: React.FC<Props> = ({ fabricDesignCardsData }) => {
  return (
    <div className="flex flex-col justify-start items-stretch gap-20 mt-24 sm:mt-28 lg:gap-24 lg:mt-32">
      <FabricInfoSection />
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:min-w-[1280px] self-center -mt-10">
        <img
          src="/assets/img_1091_2366_627d67.jpeg"
          className="h-48 lg:h-[387px] w-full lg:w-[403px] object-cover [clip-path:path('M0,48c0,-22.6274_0,-33.9411_7.02944,-40.97056c7.02946,-7.02944_18.34316,-7.02944_40.97056,-7.02944h307c22.627,0_33.941,0_40.971,7.02944c7.029,7.02946_7.029,18.34316_7.029,40.97056v291c0,22.627_0,33.941_-7.029,40.971c-7.03,7.029_-18.344,7.029_-40.971,7.029h-307c-22.6274,0_-33.9411,0_-40.97056,-7.029c-7.02944,-7.03_-7.02944,-18.344_-7.02944,-40.971z')'] mx-auto"
        />
        <div className="flex flex-col items-center gap-8">
          <Button className="bg-black font-semibold text-white text-base min-w-[276px] h-16 w-[276px] cursor-pointer flex items-center justify-center gap-1 rounded-full">
            {messages['discover_more']}
            <SvgIcon1 className="w-8 h-8" />
          </Button>
          <ImageCard />
        </div>
        <img
          src="/assets/img_1091_2366_627d67.jpeg"
          className="h-48 lg:h-[387px] w-full lg:w-[403px] object-cover [clip-path:path('M0,48c0,-22.6274_0,-33.9411_7.02944,-40.97056c7.02946,-7.02944_18.34316,-7.02944_40.97056,-7.02944h307c22.627,0_33.941,0_40.971,7.02944c7.029,7.02946_7.029,18.34316_7.029,40.97056v291c0,22.627_0,33.941_-7.029,40.971c-7.03,7.029_-18.344,7.029_-40.971,7.029h-307c-22.6274,0_-33.9411,0_-40.97056,-7.029c-7.02944,-7.03_-7.02944,-18.344_-7.02944,-40.971z')'] mx-auto"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-end gap-2 lg:min-w-[1282px] self-center">
        <div className="text-center lg:text-left">
          <p className="font-semibold text-black text-4xl lg:text-[56px] leading-tight lg:leading-[67px] whitespace-pre-wrap">
            {messages['range_fabric_types_we_offer']}
          </p>
          <p className="mt-6 text-lg text-gray-600">
            {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
          </p>
        </div>
        <div className="flex justify-center lg:justify-start items-center gap-2">
          <div className="border border-black rounded-full p-2">
            <SvgIcon2 className="w-6 h-6" />
          </div>
          <div className="bg-black rounded-full p-2 ml-3">
            <SvgIcon3 className="w-6 h-6" />
          </div>
        </div>
      </div>
      <StylishContentBlock />
      <div className="flex flex-col lg:flex-row justify-between items-start gap-2 lg:min-w-[1281px] self-center">
        <div className="max-w-full lg:max-w-[520px] text-center lg:text-left">
          <p className="font-semibold text-black text-5xl lg:text-[80px] leading-tight lg:leading-[96px]">
            {messages['we_analyzeltbr_gtwe_refineltbr_gtwe_innovate']}
          </p>
          <p className="mt-10 text-lg text-gray-600 tracking-wide">
            {messages['we_trusted_partner_offering_crafted_custom_functio']}
          </p>
          <p className="mt-10 text-lg font-bold underline">
            {messages['about_us_gt']}
          </p>
        </div>
        <FabricDesignRenderer fabricDesignCardsData={fabricDesignCardsData} />
      </div>
      <RealizationDisplay />
    </div>
  )
}

export default FabricDesignLayout
