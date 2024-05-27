import React from 'react'

interface FabricDesignCardProps {
  fabricDesignAspect: string
  suggestedName: string
  alignmentPreference: string
  determineTextAlignmentBasedOnTheme: (
    theme: string,
  ) => 'left' | 'center' | 'right'
}

const FabricDesignCard: React.FC<FabricDesignCardProps> = ({
  fabricDesignAspect,
  suggestedName,
  alignmentPreference,
  determineTextAlignmentBasedOnTheme,
}) => {
  // Determine text alignment based on the theme
  const textAlign = determineTextAlignmentBasedOnTheme('center') // Pass the theme value

  return (
    <div className="bg-[black] box-border flex justify-center flex-col grow-0 shrink-0 basis-auto pl-[23px] pr-[21.5px] py-[51px] rounded-3xl [&>*:nth-child(even)]:items-stretch [&>*:nth-child(odd)]:items-center">
      <p
        className="[font-family:Artnoova] text-[32px] font-bold tracking-[1.60px] text-[white] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0"
        style={{ textAlign: textAlign }}
      >
        {fabricDesignAspect}
      </p>
      <p
        className="[font-family:Inter,sans-serif] text-lg font-normal text-center leading-[25px] text-[#dedede] whitespace-pre-wrap grow-0 shrink-0 basis-auto mt-[22px] m-0 p-0"
        style={{ alignSelf: alignmentPreference }}
      >
        {suggestedName}
      </p>
    </div>
  )
}

export default FabricDesignCard
