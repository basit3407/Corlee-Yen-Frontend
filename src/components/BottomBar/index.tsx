import ProductSubscriptionSection from '../ProductSubscriptionSection'
import SvgIcon1 from './icons/SvgIcon1'
import SvgIcon2 from './icons/SvgIcon2'
import SvgIcon3 from './icons/SvgIcon3'
import SvgIcon4 from './icons/SvgIcon4'
import messages from './messages.json'

function BottomBar() {
  return (
    <div className="bg-black w-full box-border flex flex-col items-center border-none">
      <div className="flex flex-col items-center gap-16 w-full max-w-screen-xl px-4 py-20 box-border">
        <ProductSubscriptionSection />
        <div className="flex justify-between items-center w-full gap-10">
          <div className="flex justify-start items-center gap-10">
            <p className="font-medium text-white">{messages['products']}</p>
            <p className="font-medium text-white">{messages['events']}</p>
            <p className="font-medium text-white">{messages['about_us']}</p>
          </div>
          <img
            src="/assets/img_1091_2339_bf4927.png"
            className="h-10 object-cover"
          />
          <div className="flex justify-end items-center gap-10">
            <SvgIcon1 className="w-8 h-8 text-white" />
            <SvgIcon2 className="w-8 h-8 text-white" />
            <SvgIcon3 className="w-8 h-8 text-white" />
            <SvgIcon4 className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 text-center text-white">
          <div className="flex justify-center items-center gap-6 mb-6">
            <p className="font-medium">{messages['33_123456_789']}</p>
            <div className="w-px h-5 bg-gray-300" />
            <p className="font-medium">{messages['infocorleecom']}</p>
          </div>
          <p className="font-medium mb-6">
            {messages['5f_no_489_section_3_jinma_rd_changhua_city_changhu']}
          </p>
          <p className="text-sm">
            <span>{messages['2023_corlee__co_all_rights_reserved']} </span>
            <a
              href="https://www.allbirds.com/pages/allbirds-terms-of-use"
              className="underline"
            >
              {messages['terms']}
            </a>
            <span>, </span>
            <a
              href="https://www.allbirds.com/pages/privacy-policy"
              className="underline"
            >
              {messages['privacy']}
            </a>
            <span> &amp; </span>
            <a
              href="https://www.allbirds.com/pages/accessibility"
              className="underline"
            >
              {messages['accessibility']}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
