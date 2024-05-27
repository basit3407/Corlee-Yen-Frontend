import ImageContainer from "../ImageContainer";
import DisplayImage1 from "../DisplayImage1";
import ImageContainer2 from "../ImageContainer2";
import DisplayImage from "../DisplayImage";
import ImageContainer1 from "../ImageContainer1";
import messages from "./messages.json";

function RealizationDisplay() {
  return (
    <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto">
      <p className="[font-family:Artnoova] text-7xl font-semibold leading-[79px] text-[black] whitespace-pre-wrap self-center grow-0 shrink-0 basis-auto m-0 p-0">{messages["realizations"]}</p>
      <div className="flex justify-between items-start flex-row gap-6 grow-0 shrink-0 basis-auto mt-12">
        <div className="grow-0 shrink-0 basis-auto pb-2">
          <img src="/assets/img_1091_2307_f29af3.jpeg" className="h-[447px] max-w-[initial] object-cover w-[100.00%] box-border block rounded-3xl border-[none]" />
          <ImageContainer />
        </div>
        <div className="grow-0 shrink-0 basis-auto pb-[5px]">
          <img src="/assets/img_1091_2310_f17dab.jpeg" className="h-[383px] max-w-[initial] object-cover w-[100.00%] box-border block rounded-3xl border-[none]" />
          <DisplayImage1 />
        </div>
        <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto">
          <img
            src="/assets/img_1091_2313_ad3dbd.jpeg"
            className="h-[351px] max-w-[initial] object-cover box-border block grow-0 shrink-0 basis-auto rounded-3xl border-[none]"
          />
          <ImageContainer2 />
        </div>
        <div className="grow-0 shrink-0 basis-auto pb-1">
          <img src="/assets/img_1091_2316_73de86.jpeg" className="h-[507px] max-w-[initial] object-cover w-[100.00%] box-border block rounded-3xl border-[none]" />
          <DisplayImage />
        </div>
        <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto pb-[5px]">
          <img
            src="/assets/img_1091_2319_54c8d5.jpeg"
            className="h-[383px] max-w-[initial] object-cover box-border block grow-0 shrink-0 basis-auto rounded-3xl border-[none]"
          />
          <ImageContainer1 />
        </div>
      </div>
    </div>
  );
}

export default RealizationDisplay;
