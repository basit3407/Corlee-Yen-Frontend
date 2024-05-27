import ImageContainer from '../ImageContainer'
import DisplayImage1 from '../DisplayImage1'
import ImageContainer2 from '../ImageContainer2'
import DisplayImage from '../DisplayImage'
import ImageContainer1 from '../ImageContainer1'
import messages from './messages.json'

function RealizationDisplay() {
  return (
    <div className="flex flex-col items-center grow-0 shrink-0 basis-auto">
      <p className="font-family-Artnoova text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-tight lg:leading-[79px] text-black text-center whitespace-pre-wrap m-0 p-0">
        {messages['realizations']}
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 grow-0 shrink-0 basis-auto mt-12 lg:max-w-[1280px] w-full mx-auto">
        <div className="pb-2 flex flex-col items-center w-full lg:w-auto">
          <img
            src="/assets/img_1091_2307_f29af3.jpeg"
            className="h-[447px] w-full lg:w-auto object-cover block rounded-3xl border-none"
          />
          <ImageContainer />
        </div>
        <div className="pb-[5px] flex flex-col items-center w-full lg:w-auto">
          <img
            src="/assets/img_1091_2310_f17dab.jpeg"
            className="h-[383px] w-full lg:w-auto object-cover block rounded-3xl border-none"
          />
          <DisplayImage1 />
        </div>
        <div className="flex flex-col items-center w-full lg:w-auto">
          <img
            src="/assets/img_1091_2313_ad3dbd.jpeg"
            className="h-[351px] w-full lg:w-auto object-cover block rounded-3xl border-none"
          />
          <ImageContainer2 />
        </div>
        <div className="pb-1 flex flex-col items-center w-full lg:w-auto">
          <img
            src="/assets/img_1091_2316_73de86.jpeg"
            className="h-[507px] w-full lg:w-auto object-cover block rounded-3xl border-none"
          />
          <DisplayImage />
        </div>
        <div className="pb-[5px] flex flex-col items-center w-full lg:w-auto">
          <img
            src="/assets/img_1091_2319_54c8d5.jpeg"
            className="h-[383px] w-full lg:w-auto object-cover block rounded-3xl border-none"
          />
          <ImageContainer1 />
        </div>
      </div>
    </div>
  )
}

export default RealizationDisplay
