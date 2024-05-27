import messages from './messages.json'

function FabricInfoSection() {
  return (
    <div className="flex flex-col items-center grow-0 shrink-0">
      <div className="flex flex-col items-center max-w-full lg:max-w-[1064px] box-border px-4">
        <p className="font-family-Artnoova text-4xl sm:text-5xl lg:text-[64px] font-semibold text-center leading-tight sm:leading-tight lg:leading-[77px] text-black whitespace-pre-wrap w-full m-0 p-0">
          {messages['explore_cuttingedge_fabrics_redefining_global_fash']}
        </p>
        <p className="font-family-Inter text-base sm:text-lg font-normal text-center leading-snug sm:leading-[25px] text-gray-600 whitespace-pre-wrap w-full max-w-[765px] mt-4 sm:mt-6 lg:mt-10 m-0 p-0">
          {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
        </p>
      </div>
    </div>
  )
}

export default FabricInfoSection
