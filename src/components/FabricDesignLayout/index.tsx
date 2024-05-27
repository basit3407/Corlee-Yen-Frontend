import { Button } from '@mui/base'
import FabricInfoSection from '../FabricInfoSection'
import ImageCard from '../ImageCard'
import StylishContentBlock from '../StylishContentBlock'
import FabricDesignRenderer from '../FabricDesignRenderer'
import RealizationDisplay from '../RealizationDisplay'
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
    <div className="flex justify-start items-stretch flex-col gap-[88px] grow-0 shrink-0 basis-auto mt-[104px]">
      <FabricInfoSection />
      <div className="flex justify-between items-start flex-row gap-8 min-w-[1280px] self-center grow-0 shrink-0 basis-auto box-border -mt-10">
        <img
          src="/assets/img_1091_2366_627d67.jpeg"
          className="h-[387px] max-w-[initial] object-cover w-[403px] [clip-path:path('M0,48c0,-22.6274_0,-33.9411_7.02944,-40.97056c7.02946,-7.02944_18.34316,-7.02944_40.97056,-7.02944h307c22.627,0_33.941,0_40.971,7.02944c7.029,7.02946_7.029,18.34316_7.029,40.97056v291c0,22.627_0,33.941_-7.029,40.971c-7.03,7.029_-18.344,7.029_-40.971,7.029h-307c-22.6274,0_-33.9411,0_-40.97056,-7.029c-7.02944,-7.03_-7.02944,-18.344_-7.02944,-40.971z')] block box-border"
        />
        <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto">
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="bg-[black] [font-family:Inter,sans-serif] text-base font-semibold text-[white] min-w-[276px] h-16 w-[276px] cursor-pointer inline-flex items-center justify-center gap-[3.75px] box-border grow-0 shrink-0 basis-auto rounded-[110px] border-[none]">
            {messages['discover_more']}
            <SvgIcon1 className="w-8 h-8 flex" />
          </Button>
          <ImageCard />
        </div>
        <img
          src="/assets/img_1091_2366_627d67.jpeg"
          className="h-[387px] max-w-[initial] object-cover w-[403px] [clip-path:path('M0,48c0,-22.6274_0,-33.9411_7.02944,-40.97056c7.02946,-7.02944_18.34316,-7.02944_40.97056,-7.02944h307c22.627,0_33.941,0_40.971,7.02944c7.029,7.02946_7.029,18.34316_7.029,40.97056v291c0,22.627_0,33.941_-7.029,40.971c-7.03,7.029_-18.344,7.029_-40.971,7.029h-307c-22.6274,0_-33.9411,0_-40.97056,-7.029c-7.02944,-7.03_-7.02944,-18.344_-7.02944,-40.971z')] block box-border"
        />
      </div>
      <div className="flex justify-between items-end flex-row gap-2 min-w-[1282px] self-center grow-0 shrink-0 basis-auto box-border">
        <div className="grow-0 shrink-0 basis-auto">
          <p className="[font-family:Artnoova] text-[56px] font-semibold leading-[67px] text-[black] whitespace-pre-wrap m-0 p-0">
            {messages['range_fabric_types_we_offer']}
          </p>
          <p className="[font-family:Inter,sans-serif] text-lg font-normal text-[#666666] whitespace-pre-wrap mt-6 m-0 p-0">
            {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
          </p>
        </div>
        <div className="flex justify-start items-stretch flex-row h-[38px] grow-0 shrink-0 basis-auto box-border">
          <div className="border box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-[7px] rounded-[78px] border-solid border-[black]">
            <SvgIcon2 className="w-6 h-6 flex grow-0 shrink-0 basis-auto" />
          </div>
          <div className="bg-[black] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto ml-[12.5px] px-[7px] rounded-[78px]">
            <SvgIcon3 className="w-6 h-6 flex grow-0 shrink-0 basis-auto" />
          </div>
        </div>
      </div>
      <StylishContentBlock />
      <div className="flex justify-between items-start flex-row gap-2 min-w-[1281px] self-center grow-0 shrink-0 basis-auto box-border">
        <div className="max-w-[520px] grow-0 shrink-0 basis-auto box-border">
          <p className="[font-family:Artnoova] text-[80px] font-semibold text-left leading-[96px] text-[black] whitespace-pre-wrap m-0 p-0">
            {messages['we_analyzeltbr_gtwe_refineltbr_gtwe_innovate']}
          </p>
          <p className="[font-family:Inter,sans-serif] text-lg font-normal tracking-[0.90px] text-left leading-[25px] text-[#666666] whitespace-pre-wrap w-[100.00%] box-border mt-10 m-0 p-0">
            {messages['we_trusted_partner_offering_crafted_custom_functio']}
          </p>
          <p className="[font-family:Inter,sans-serif] text-lg font-bold tracking-[0.90px] underline text-[black] whitespace-pre-wrap mt-10 m-0 p-0">
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
