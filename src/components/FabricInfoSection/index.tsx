import messages from "./messages.json";

function FabricInfoSection() {
  return (
    <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto">
      <div className="flex justify-start items-center flex-col max-w-[1064px] box-border">
        <p className="[font-family:Artnoova] text-[64px] font-semibold text-center leading-[77px] text-[black] whitespace-pre-wrap self-stretch grow-0 shrink-0 basis-auto m-0 p-0">
          {messages["explore_cuttingedge_fabrics_redefining_global_fash"]}
        </p>
        <p className="[font-family:Inter,sans-serif] text-lg font-normal text-center leading-[25px] text-[#666666] whitespace-pre-wrap max-w-[765px] grow-0 shrink-0 basis-auto box-border mt-10 m-0 p-0">
          {messages["lrem_ipsum_suledes_plankning_till_heterossade_tosn"]}
        </p>
      </div>
    </div>
  );
}

export default FabricInfoSection;
